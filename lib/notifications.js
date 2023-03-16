import { Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

export async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      showBadge: true,
      vibrationPattern: [0, 250, 250, 250],
      sound: Notifications.AndroidAudioUsage.NOTIFICATION,
      enableLights: true,
      enableVibrate: true,
      lockscreenVisibility: Notifications.AndroidNotificationVisibility.PRIVATE,
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}
