import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys, ColorModeScheme } from "./const";

export const getAppColorScheme = async () => {
  const colorScheme = await AsyncStorage.getItem(AsyncStorageKeys.COLOR_SCHEME);

  return colorScheme as ColorModeScheme | null;
};
