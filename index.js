import messaging from "@react-native-firebase/messaging";
import { registerRootComponent ***REMOVED*** from "expo";

import App from "./App";

// bacgkround notification handler

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log(remoteMessage);
***REMOVED***

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
