import React from "react";

import { NativeBaseProvider } from "native-base";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import TabNavigator from "./navigation/TabNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import GetStarted from "./splashScreen";
import { AuthContext } from "../hooks/context";
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
  } = Auth();

  setTimeout(() => {
    setSplashScreen(false);
  }, 1000);

  React.useEffect(() => {
    console.log(user)
  }, [user]);

  React.useEffect(() => {
    handleSignedIn()
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
      <View
        style={{ marginTop: insets.top, flex: 1, backgroundColor: "white" }}
      >
        <NavigationContainer>
          <AuthContext.Provider value={authContext}>
            {!isLoggedIn ? <AuthNavigator /> : <TabNavigator />}
          </AuthContext.Provider>
        </NavigationContainer>
      </View>
    </NativeBaseProvider>
  );
}
