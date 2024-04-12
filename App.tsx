import { ColorScheme, ScreenNames } from '<utils>/const';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '<module>/store';
import HomeScreen from '<screens>/Home';
import AppPopup from '<components>/AppPopup';
import useAppPermision from '<utils>/hook/useAppPermision';
import useSetColorScheme from '<utils>/hook/useSetColorScheme';
import useLocalDatabase from '<utils>/hook/useLocalDatabase';

export default function App() {
  useAppPermision();
  useLocalDatabase();

  const { colorScheme: themeColor } = useSetColorScheme();

  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <AppPopup />
      <NavigationContainer independent={true}>
        <ThemeProvider theme={ColorScheme[themeColor]}>
          <SafeAreaProvider>
            <StatusBar backgroundColor={ColorScheme[themeColor].background} />
            <Stack.Navigator
              initialRouteName={ScreenNames.HOME}
              screenOptions={{
                gestureEnabled: true,
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
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
              <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
            </Stack.Navigator>
          </SafeAreaProvider>
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
}
