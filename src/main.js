import React from "react";

import { NativeBaseProvider } from "native-base";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Auth from "../hooks/auth";
import GetStarted from "./splashScreen";
import { CartProvider } from "../hooks/cart";
import TabNavigator from "./navigation/TabNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import { AuthContext } from "../hooks/context";
import NetInfo from "@react-native-community/netinfo";
import ErrorModal from "./components/shared/styles/ErrorModal";

export default function Main() {
  const insets = useSafeAreaInsets();

  const [splashScreen, setSplashScreen] = React.useState(true);
  const {
    authContext,
    user,
    isLoggedIn,
    handleSignedIn,
    googleUser,
    isConnected,
    setIsConnected,
  } = Auth();

  React.useEffect(() => {
    console.log({ user, isLoggedIn, googleUser });
  }, [user, googleUser]);

  const isAlreadySignedIn = async () => {
    try {
      await handleSignedIn();
      setTimeout(() => {
        setSplashScreen(false);
      }, 500);
    } catch (err) {
      console.log(err);
      setSplashScreen(false);
    }
  };

  React.useEffect(() => {
    NetInfo.addEventListener((state) => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setIsConnected(state.isConnected);
    });
    isAlreadySignedIn();
  }, []);
  return splashScreen ? (
    <GetStarted />
  ) : (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <CartProvider>
          <View
            style={{ marginTop: insets.top, flex: 1, backgroundColor: "white" }}
          >
            {!isLoggedIn ? <AuthNavigator /> : <TabNavigator />}
            <ErrorModal
              isOpen={!isConnected}
              onClose={setIsConnected}
              title="Network Error"
              error="No Internet Connection. Try again later."
            />
          </View>
        </CartProvider>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
