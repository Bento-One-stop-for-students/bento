import React from "react";
import "expo-dev-client";

import * as Font from "expo-font";
import { View ***REMOVED*** from "react-native";
import { NativeBaseProvider ***REMOVED*** from "native-base";
import * as SplashScreen from "expo-splash-screen";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_900Black,
  Poppins_800ExtraBold,
  Poppins_700Bold,
***REMOVED*** from "@expo-google-fonts/poppins";
import { StatusBar ***REMOVED*** from "expo-status-bar";
import * as Notifications from "expo-notifications";
import NetInfo from "@react-native-community/netinfo";
import messaging from "@react-native-firebase/messaging";
import { SafeAreaView ***REMOVED*** from "react-native-safe-area-context";

import { handleIsSignedIn ***REMOVED*** from "./lib/auth";
import Navigator from "./navigation/Navigator";
import { AuthContext ***REMOVED*** from "./lib/context/authContext";
import NetworkErrorModal from "./components/NetworkErrorModal";
import { registerForPushNotificationsAsync ***REMOVED*** from "./lib/notifications";
import OverLayNotificationModal from "./components/OverLayNotificationModal";

// import SpInAppUpdates, { IAUUpdateKind ***REMOVED*** from "sp-react-native-in-app-updates";

SplashScreen.preventAutoHideAsync();

// const inAppUpdates = new SpInAppUpdates(
//   false // isDebug
// );
// // curVersion is optional if you don't provide it will automatically take from the app using react-native-device-info
// inAppUpdates.checkNeedsUpdate({ curVersion: "0.0.8" ***REMOVED***).then((result) => {
//   if (result.shouldUpdate) {
//     let updateOptions = {***REMOVED***
//     if (Platform.OS === "android") {
//       // android only, on iOS the user will be promped to go to your app store page
//       updateOptions = {
//         updateType: IAUUpdateKind.FLEXIBLE,
//   ***REMOVED***;
// ***REMOVED***
//     inAppUpdates.startUpdate(updateOptions); // https://github.com/SudoPlz/sp-react-native-in-app-updates/blob/master/src/types.ts#L78
// ***REMOVED***
// ***REMOVED***

export default function AppExtended({ navigation ***REMOVED***) {
  const [showNetworkErrorModal, setShowNetworkErrorModal] =
    React.useState(false);
  const [appIsReady, setAppIsReady] = React.useState(false);
  const { authDispatch ***REMOVED*** = React.useContext(AuthContext);
  React.useEffect(() => {
    async function prepare() {
    ***REMOVED***
        await registerForPushNotificationsAsync();
        await Font.loadAsync({
          Poppins_500Medium,
          Poppins_600SemiBold,
          Poppins_900Black,
          Poppins_800ExtraBold,
          Poppins_700Bold,
        ***REMOVED***
        await handleIsSignedIn(authDispatch);
  ***REMOVED*** catch (err) {
        console.log(err);
  ***REMOVED*** finally {
        setAppIsReady(true);
  ***REMOVED***
***REMOVED***
    prepare();

    // Check Internet Connection
    NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        setShowNetworkErrorModal(true);
  ***REMOVED***
    ***REMOVED***

    // Foreground notification subscription

    messaging().onMessage(async (remoteMessage) => {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: remoteMessage.notification.title,
          body: remoteMessage.notification.body,
          data: { data: "goes here" ***REMOVED***,
    ***REMOVED***,
        trigger: null,
      ***REMOVED***
    ***REMOVED***
***REMOVED***, []);
  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
***REMOVED***
***REMOVED***, [appIsReady]);
  if (!appIsReady) {
    return null;
***REMOVED***

  return (
    <NativeBaseProvider>
      <SafeAreaView className="flex-1">
        <StatusBar animated={true***REMOVED*** backgroundColor="#131212" style="light" />
        <View className="flex-1 bg-[#131212]" onLayout={onLayoutRootView***REMOVED***>
          <Navigator />
          <OverLayNotificationModal />
          <NetworkErrorModal
            isOpen={showNetworkErrorModal***REMOVED***
            onClose={setShowNetworkErrorModal***REMOVED***
          />
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
***REMOVED***
