import { useFonts } from "expo-font";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import GumjournalsForm from "./src/screens/GumjournalsForm";
import { MainContainerBackground } from "./src/components/global/container";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getAppNotiPermission } from "./src/utils/getAppPermission";
import * as SplashScreen from "expo-splash-screen";
import CommonContext from "./src/module/common";
import { APPCOLORSCHEME } from "./src/utils/const";
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

  return (
    <CommonContext.Provider value={{ colorScheme }}>
      <SafeAreaProvider>
        <MainContainerBackground onLayout={onLayoutView}>
          <GumjournalsForm />
        </MainContainerBackground>
      </SafeAreaProvider>
      <Toast />
    </CommonContext.Provider>
  );
}
