import { useFonts } from "expo-font";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getAppNotiPermission } from "./src/utils/getAppPermission";
import * as SplashScreen from "expo-splash-screen";
import CommonContext from "./src/module/common";
import { APPCOLORSCHEME } from "./src/utils/const";
import Toast from "./src/components/Toast";
import GumjournalsForm from "./src/screens/GumjournalsForm";
import { View } from "react-native";

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

  return (
    <CommonContext.Provider value={{ colorScheme }}>
      <SafeAreaProvider>
        <View onLayout={onLayoutView}>
          <GumjournalsForm />
          {/*<GumjournalsOverview />*/}
        </View>
      </SafeAreaProvider>
      <Toast />
    </CommonContext.Provider>
  );
}
