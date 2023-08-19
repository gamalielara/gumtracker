import { useEffect, useState } from "react";
import { AsyncStorageKeys, ColorModeScheme } from "../const";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
  const [colorScheme, setColorScheme] = useState(ColorModeScheme.LIGHT_MODE);

  useEffect(() => {
    (async () => {
      const scheme = (await AsyncStorage.getItem(
        AsyncStorageKeys.COLOR_SCHEME,
      )) as ColorModeScheme | null;

      setColorScheme(scheme || ColorModeScheme.LIGHT_MODE);
    })();
  }, []);

  return { colorScheme };
};
