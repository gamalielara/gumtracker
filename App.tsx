/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import CommonContext from "./src/module/common";
import { ColorScheme, ScreenNames } from "./src/utils/const";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "./src/components/Toast";
import useAppPermision from "./src/utils/hook/useAppPermision";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import useSetColorScheme from "./src/utils/hook/useSetColorScheme";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";
import TrackerForms from "./src/screens/TrackerForms";
import { Provider } from "react-redux";
import { store } from "./src/module/store";
import DataPreloader from "./src/components/DataPreloader";
import useCreateLocalSQLDB from "./src/utils/hook/useCreateLocalSQLDB";

export default function App() {
  useAppPermision();

  const { colorScheme: themeColor } = useSetColorScheme();

  const [fontsLoaded] = useFonts({
    Inter: require("./src/assets/fonts/Inter-Regular.ttf"),
    "Inter-Light": require("./src/assets/fonts/Inter-Light.ttf"),
    "Inter-Bold": require("./src/assets/fonts/Inter-Bold.ttf"),
  });

  const onLayoutView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return;

  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <CommonContext.Provider
          value={{ colorScheme: ColorScheme[themeColor] }}
        >
          <ThemeProvider theme={ColorScheme[themeColor]}>
            <DataPreloader>
              <SafeAreaProvider onLayout={onLayoutView}>
                <StatusBar
                  backgroundColor={ColorScheme[themeColor].background}
                />
                <Stack.Navigator
                  initialRouteName={ScreenNames.TRACKER_FORMS}
                  screenOptions={{
                    gestureEnabled: true,
                    headerShown: false,
                    cardStyleInterpolator:
                      CardStyleInterpolators.forHorizontalIOS,
                    transitionSpec: {
                      open: {
                        animation: "timing",
                        config: {
                          duration: 450,
                        },
                      },
                      close: {
                        animation: "timing",
                        config: {
                          duration: 450,
                        },
                      },
                    },
                  }}
                >
                  <Stack.Screen
                    name={ScreenNames.TRACKER_FORMS}
                    //@ts-ignore
                    component={TrackerForms}
                  />
                </Stack.Navigator>
                <Toast />
              </SafeAreaProvider>
            </DataPreloader>
          </ThemeProvider>
        </CommonContext.Provider>
      </NavigationContainer>
    </Provider>
  );
}
