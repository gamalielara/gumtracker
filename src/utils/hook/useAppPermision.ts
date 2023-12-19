import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAppNotiPermission } from "../getAppPermission";
import { useEffect } from "react";
import { AsyncStorageKeys } from "../const";

export default async () => {
  const getAppNotiPermissionStatusFromLocalStorage = async () => {
    try {
      const status = await AsyncStorage.getItem(AsyncStorageKeys.NOTI_STATUS);
      return status;
    } catch (err) {
      console.error("ERR ", err);
    }
  };

  useEffect(() => {
    (async () => {
      const notiPermissionStatusLocalStorage =
        await getAppNotiPermissionStatusFromLocalStorage();

      if (!notiPermissionStatusLocalStorage) {
        await getAppNotiPermission();
      }
    })();
  }, []);
};
