import * as Notifications from "expo-notifications";
import { AsyncStorageKeys } from "./const";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAppNotiPermission = async () => {
  const { status: notiPermissionStatus } =
    await Notifications.getPermissionsAsync();

  if (notiPermissionStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();

    if (status === "granted") {
      try {
        await AsyncStorage.setItem(AsyncStorageKeys.NOTI_STATUS, "true");
      } catch (err) {
        console.error(err);
      }
    } else {
      alert(`Warning: failed to get noti permission. Noti Status: ${status}`);
    }
  }

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
};
