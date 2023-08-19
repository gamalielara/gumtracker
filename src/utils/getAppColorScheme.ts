import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys, ColorModeScheme } from "./const";

export const getColorScheme = async () => {
  const colorScheme = await AsyncStorage.getItem(AsyncStorageKeys.COLOR_SCHEME);

  return colorScheme as ColorModeScheme | null;
};
