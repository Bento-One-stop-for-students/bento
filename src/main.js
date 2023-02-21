import React from "react";

import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import TabNavigator from "./navigation/TabNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import { NativeBaseProvider } from "native-base";
import GetStarted from "./splashScreen";
import { AuthContext } from "../hooks/context";

export default function Main() {
  const insets = useSafeAreaInsets();
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState("true");

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken("sddas");
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    SignOut: () => {
      setUserToken("sddas");
      setIsLoading(false);
    },
  }));

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <GetStarted />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NativeBaseProvider>
        <View style={{ marginTop: insets.top, flex: 1 }}>
          <NavigationContainer>
            {loggedIn ? <AuthNavigator /> : <TabNavigator />}
          </NavigationContainer>
        </View>
      </NativeBaseProvider>
    </AuthContext.Provider>
  );
}
