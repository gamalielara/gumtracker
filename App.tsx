import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import GumjournalsForm from "./src/screens/GumjournalsForm";
import {
  MainContainerBackground,
  SafeAreaApp,
} from "./src/components/global/container";

export default function App() {
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
    // <View style={styles.container}>
    //   <Text style={styles.text}>
    //     Open up App.tsx to start working on your app!
    //   </Text>
    //   <StatusBar style="auto" />
    // </View>

    <MainContainerBackground>
      <SafeAreaApp>
        <GumjournalsForm />
      </SafeAreaApp>
    </MainContainerBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontFamily: "Inter",
  },
});
