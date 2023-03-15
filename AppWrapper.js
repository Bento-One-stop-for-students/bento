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
import { getStatus ***REMOVED*** from "./lib/firebase/user";

SplashScreen.preventAutoHideAsync();

export default function AppWrapper({ navigation ***REMOVED***) {
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
  ***REMOVED*** catch (e) {
        console.warn(e);
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
