import React from "react";

import { View ***REMOVED*** from "react-native";
import { NavigationContainer ***REMOVED*** from "@react-navigation/native";
import { useSafeAreaInsets ***REMOVED*** from "react-native-safe-area-context";

import TabNavigator from "./navigation/TabNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import { NativeBaseProvider ***REMOVED*** from "native-base";
import GetStarted from "./splashScreen";
import { AuthContext ***REMOVED*** from "../hooks/context";
import Auth from "../hooks/auth";
import { ActivityIndicator ***REMOVED*** from "react-native";
import { handleSignUp ***REMOVED*** from "../lib/user";

export default function Main() {
  const insets = useSafeAreaInsets();
  const [splashScreen, setSplashScreen] = React.useState(true);

  const {
    authContext,
    user,
    isLoggedIn,
    signIn,
    signOut,
    checkSignedIn,
    isLoading,
    isAuthenticated,
***REMOVED*** = Auth();

  setTimeout(() => {
    setSplashScreen(false);
***REMOVED***, 1000);

  React.useEffect(() => {
    checkSignedIn();
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
      <View style={{ marginTop: insets.top, flex: 1 ***REMOVED******REMOVED***>
        <NavigationContainer>
          <AuthContext.Provider value={authContext***REMOVED***>
            {!isLoggedIn ? <AuthNavigator /> : <TabNavigator />***REMOVED***
          </AuthContext.Provider>
        </NavigationContainer>
      </View>
    </NativeBaseProvider>
  );
***REMOVED***
