import React from "react";
import "expo-dev-client";

import * as Font from "expo-font";
import { View ***REMOVED*** from "react-native";
import { NativeBaseProvider ***REMOVED*** from "native-base";
import * as SplashScreen from "expo-splash-screen";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
***REMOVED*** from "@expo-google-fonts/poppins";
import { StatusBar ***REMOVED*** from "expo-status-bar";
import * as Notifications from "expo-notifications";
import messaging from "@react-native-firebase/messaging";
import { SafeAreaView ***REMOVED*** from "react-native-safe-area-context";

import { handleIsSignedIn ***REMOVED*** from "./lib/auth";
import Navigator from "./navigation/Navigator";
import { AuthContext ***REMOVED*** from "./lib/context/authContext";
import { registerForPushNotificationsAsync ***REMOVED*** from "./lib/notifications";
import OverLayNotificationModal from "./components/OverLayNotificationModal";

SplashScreen.preventAutoHideAsync();
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
***REMOVED***),
***REMOVED***

export default function AppExtended({ navigation ***REMOVED***) {
  const [appIsReady, setAppIsReady] = React.useState(false);
  const { authDispatch ***REMOVED*** = React.useContext(AuthContext);
  React.useEffect(() => {
    async function prepare() {
    ***REMOVED***
        await registerForPushNotificationsAsync();
        await Font.loadAsync({
          Poppins_500Medium,
          Poppins_600SemiBold,
        ***REMOVED***
        await handleIsSignedIn(authDispatch);
  ***REMOVED*** catch (err) {
        console.log(err);
  ***REMOVED*** finally {
        setAppIsReady(true);
  ***REMOVED***
***REMOVED***
    prepare();

    // Foreground notification subscription

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: remoteMessage.notification.title,
          body: remoteMessage.notification.body,
          data: { data: "goes here" ***REMOVED***,
    ***REMOVED***,
        trigger: null,
      ***REMOVED***
    ***REMOVED***
    return unsubscribe;
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
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
***REMOVED***
