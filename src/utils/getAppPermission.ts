import * as Notifications from "expo-notifications";

export const getAppNotiPermission = async () => {
  const { status: notiPermissionStatus } =
    await Notifications.getPermissionsAsync();

  if (notiPermissionStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();

    if (status !== "granted") {
      alert("Warning: failed to get noti permission.");
    } else {
      console.info("NOTI PERMISSION: ", status);
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
