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

export default function Main() {
  const insets = useSafeAreaInsets();

  const { authContext, isLoading, isLoggedIn, user ***REMOVED*** = Auth();
  
  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#7345F6" />
      </View>
    );
***REMOVED***

  return (
    <AuthContext.Provider value={authContext***REMOVED***>
      <NativeBaseProvider>
        <View style={{ marginTop: insets.top, flex: 1 ***REMOVED******REMOVED***>
          <NavigationContainer>
            {!isLoggedIn ? <AuthNavigator /> : <TabNavigator />***REMOVED***
          </NavigationContainer>
        </View>
      </NativeBaseProvider>
    </AuthContext.Provider>
  );
***REMOVED***
