import messaging from "@react-native-firebase/messaging";
import { registerRootComponent } from "expo";
import * as Notifications from "expo-notifications";
import App from "./App";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// bacgkround notification handler

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: remoteMessage.notification.title,
      body: remoteMessage.notification.body,
      data: { data: "goes here" },
    },
    trigger: null,
  });
});

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
