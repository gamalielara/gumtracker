import { useFonts } from "expo-font";
import { useCallback } from "react";
import { getAppNotiPermission } from "./src/utils/getAppPermission";
import * as SplashScreen from "expo-splash-screen";
import CommonContext from "./src/module/common";
import { APPCOLORSCHEME, ScreenNames } from "./src/utils/const";
import GumjournalsOverview from "./src/screens/GumjournalsOverview";
import GumjournalsForm from "./src/screens/GumjournalsForm";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "./src/components/Toast";

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

  return (
    <NavigationContainer>
      <CommonContext.Provider value={{ colorScheme }}>
        <SafeAreaProvider>
          <Stack.Navigator
            initialRouteName={ScreenNames.GUMJOURNALS_OVERVIEW}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name={ScreenNames.GUMJOURNALS_OVERVIEW}
              component={GumjournalsOverview}
            />
            <Stack.Screen
              name={ScreenNames.GUMJOURNALS_FORM}
              component={GumjournalsForm}
            />
          </Stack.Navigator>
          <Toast />
        </SafeAreaProvider>
      </CommonContext.Provider>
    </NavigationContainer>
  );
}
