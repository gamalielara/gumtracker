/* eslint-disable @typescript-eslint/ban-ts-comment */
import {useFonts} from "expo-font";
import {useCallback} from "react";
import {getAppNotiPermission} from "./src/utils/getAppPermission";
import * as SplashScreen from "expo-splash-screen";
import CommonContext from "./src/module/common";
import {APPCOLORSCHEME, ScreenNames} from "./src/utils/const";
import GumjournalsOverview from "./src/screens/GumjournalsOverview";
import GumjournalsForm from "./src/screens/GumjournalsForm";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import Toast from "./src/components/Toast";
import {CardStyleInterpolators} from "@react-navigation/stack";

export default function App() {
  getAppNotiPermission().then(() => console.info("Noti permission is created"));

  const colorScheme = APPCOLORSCHEME;

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

  const Stack = createNativeStackNavigator();

  const transitionCustomOptions = {
    animation: "timing",
    config: {
      duration: 500,
    },
  };

  return (
    <NavigationContainer>
      <CommonContext.Provider value={{ colorScheme }}>
        <SafeAreaProvider onLayout={onLayoutView}>
          <Stack.Navigator
            initialRouteName={ScreenNames.GUMJOURNALS_OVERVIEW}
            screenOptions={{
              gestureEnabled: true,
              gestureDirection: "horizontal",
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              transitionSpec: {
                open: transitionCustomOptions,
                close: transitionCustomOptions,
              },
            }}
          >
            <Stack.Screen
              name={ScreenNames.GUMJOURNALS_OVERVIEW}
              //@ts-ignore
              component={GumjournalsOverview}
            />
            <Stack.Screen
              name={ScreenNames.GUMJOURNALS_FORM}
              //@ts-ignore
              component={GumjournalsForm}
            />
          </Stack.Navigator>
          <Toast />
        </SafeAreaProvider>
      </CommonContext.Provider>
    </NavigationContainer>
  );
}
