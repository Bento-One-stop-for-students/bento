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
import { handleSignUp } from "../lib/user";

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
  } = Auth();

  setTimeout(() => {
    setSplashScreen(false);
  }, 1000);

  React.useEffect(() => {
    checkSignedIn();
  }, []);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#7345F6" />
      </View>
    );
  }

  return splashScreen ? (
    <GetStarted />
  ) : (
    <NativeBaseProvider>
      <View style={{ marginTop: insets.top, flex: 1 }}>
        <NavigationContainer>
          <AuthContext.Provider value={authContext}>
            {!isLoggedIn ? <AuthNavigator /> : <TabNavigator />}
          </AuthContext.Provider>
        </NavigationContainer>
      </View>
    </NativeBaseProvider>
  );
}
