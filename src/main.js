import React from "react";

import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import TabNavigator from "./navigation/TabNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import { NativeBaseProvider } from "native-base";
import GetStarted from "./splashScreen";
import { AuthContext } from "../hooks/context";
import Auth from "../hooks/auth";
import { ActivityIndicator } from "react-native";

export default function Main() {
  const insets = useSafeAreaInsets();

  const {
    authContext,
    user,
    isLoggedIn,
    signIn,
    signOut,
    isSignedIn,
    isLoading,
  } = Auth();

  // function to check if a already signed user exists

  React.useEffect(() => {
    isSignedIn();
  }, []);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#7345F6" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NativeBaseProvider>
        <View style={{ marginTop: insets.top, flex: 1 }}>
          <NavigationContainer>
            {!isLoggedIn ? <AuthNavigator /> : <TabNavigator />}
          </NavigationContainer>
        </View>
      </NativeBaseProvider>
    </AuthContext.Provider>
  );
}
