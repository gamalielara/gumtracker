import React from 'react';
import CommonContext from './src/module/common';
import { ColorScheme, ScreenNames } from './src/utils/const';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import useAppPermision from './src/utils/hook/useAppPermision';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import useSetColorScheme from './src/utils/hook/useSetColorScheme';
import { ThemeProvider } from 'styled-components';
import { StatusBar, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/module/store';
import DataPreloader from './src/components/DataPreloader';
import useCreateLocalSQLDB from './src/utils/hook/useCreateLocalSQLDB';
import HomeScreen from './src/screens/Home';
import Popup from './src/components/Popup';
import PopupProvider from './src/components/Popup/provider';

export default function App() {
  useAppPermision();

  const { colorScheme: themeColor } = useSetColorScheme();

  const hasLoadedDatabase = useCreateLocalSQLDB();

  if (!hasLoadedDatabase) return <Text>Loading...</Text>;

  const Stack = createStackNavigator();

  return (
    <PopupProvider>
      <Provider store={store}>
        <NavigationContainer independent={true}>
          <CommonContext.Provider
            value={{ colorScheme: ColorScheme[themeColor] }}>
            <ThemeProvider theme={ColorScheme[themeColor]}>
              <DataPreloader>
                <SafeAreaProvider>
                  <StatusBar
                    backgroundColor={ColorScheme[themeColor].background}
                  />
                  <Stack.Navigator
                    initialRouteName={ScreenNames.HOME}
                    screenOptions={{
                      gestureEnabled: true,
                      headerShown: false,
                      cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                      transitionSpec: {
                        open: {
                          animation: 'timing',
                          config: {
                            duration: 450,
                          },
                        },
                        close: {
                          animation: 'timing',
                          config: {
                            duration: 450,
                          },
                        },
                      },
                    }}>
                    <Stack.Screen
                      name={ScreenNames.HOME}
                      component={HomeScreen}
                    />
                  </Stack.Navigator>
                </SafeAreaProvider>
              </DataPreloader>
            </ThemeProvider>
          </CommonContext.Provider>
        </NavigationContainer>
      </Provider>
    </PopupProvider>
  );
}
