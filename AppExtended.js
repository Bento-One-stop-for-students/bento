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
import { SafeAreaView ***REMOVED*** from "react-native-safe-area-context";

import Navigator from "./navigation/Navigator";
import { AuthContext ***REMOVED*** from "./lib/context/authContext";
import { handleIsSignedIn ***REMOVED*** from "./lib/auth";
import OverLayNotificationModal from "./components/OverLayNotificationModal";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

SplashScreen.preventAutoHideAsync();
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
***REMOVED***),
***REMOVED***
async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus ***REMOVED*** =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status ***REMOVED*** = await Notifications.requestPermissionsAsync();
      finalStatus = status;
***REMOVED***
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
***REMOVED***
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
***REMOVED*** else {
    alert("Must use physical device for Push Notifications");
***REMOVED***

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    ***REMOVED***
***REMOVED***

  return token;
***REMOVED***

export default function AppExtended({ navigation ***REMOVED***) {
  const [expoPushToken, setExpoPushToken] = React.useState("");
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  console.log("outside");
  React.useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      console.log(token);
      setExpoPushToken(token);
    ***REMOVED***

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      ***REMOVED***

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      ***REMOVED***
    console.log(expoPushToken);

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
***REMOVED***;
***REMOVED***, []);

  const [appIsReady, setAppIsReady] = React.useState(false);
  const { authDispatch ***REMOVED*** = React.useContext(AuthContext);
  React.useEffect(() => {
    async function prepare() {
    ***REMOVED***
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
