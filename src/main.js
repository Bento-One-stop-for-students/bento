import React from "react";

import { NativeBaseProvider ***REMOVED*** from "native-base";
import { View, ActivityIndicator ***REMOVED*** from "react-native";
import { NavigationContainer ***REMOVED*** from "@react-navigation/native";
import { useSafeAreaInsets ***REMOVED*** from "react-native-safe-area-context";

import TabNavigator from "./navigation/TabNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import GetStarted from "./splashScreen";
import { AuthContext ***REMOVED*** from "../hooks/context";
import Auth from "../hooks/auth";

export default function Main() {
  const insets = useSafeAreaInsets();
  const [splashScreen, setSplashScreen] = React.useState(true);

  const {
    authContext,
    user,
    isLoggedIn,
    isLoading,
    handleSignedIn
***REMOVED*** = Auth();

  setTimeout(() => {
    setSplashScreen(false);
***REMOVED***, 1000);

  React.useEffect(() => {
    console.log(user)
***REMOVED***, [user]);

  React.useEffect(() => {
    handleSignedIn()
***REMOVED***, []);



  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#7345F6" />
      </View>
    );
***REMOVED***

  return splashScreen ? (
    <GetStarted />
  ) : (
    <NativeBaseProvider>
      <View
        style={{ marginTop: insets.top, flex: 1, backgroundColor: "white" ***REMOVED******REMOVED***
      >
        <NavigationContainer>
          <AuthContext.Provider value={authContext***REMOVED***>
            {!isLoggedIn ? <AuthNavigator /> : <TabNavigator />***REMOVED***
          </AuthContext.Provider>
        </NavigationContainer>
      </View>
    </NativeBaseProvider>
  );
***REMOVED***
