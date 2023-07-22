import * as Notifications from "expo-notifications";

export const getAppNotiPermission = async () => {
  const { status: notiPermissionStatus } =
    await Notifications.getPermissionsAsync();

  if (notiPermissionStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();

    console.log("NOTI PERMISSION: ", status);

    if (status !== "granted") {
      alert("Failed to get noti permission.");
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
