import React from "react";

import { NativeBaseProvider } from "native-base";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import TabNavigator from "./navigation/TabNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import GetStarted from "./splashScreen";
import { AuthContext, CartContext } from "../hooks/context";
import Auth from "../hooks/auth";
import Cart from "../hooks/cart";
import NetInfo from "@react-native-community/netinfo";
import ErrorModal from "./components/shared/styles/ErrorModal";

export default function Main() {
  const insets = useSafeAreaInsets();

  const [isConnected, setIsConnected] = React.useState(false);
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  const [splashScreen, setSplashScreen] = React.useState(true);
  const { cartContext } = Cart();
  const { authContext, user, isLoggedIn, isLoading, handleSignedIn } = Auth();

  React.useEffect(() => {
    console.log({ user, isLoggedIn });
  }, [user]);

  const isAlreadySignedIn = async () => {
    try {
      NetInfo.fetch().then((state) => {
        console.log("Connection type", state.type);
        setIsConnected(state.isConnected);
      });
      if (isConnected) {
        setShowErrorModal(true);
      }
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
    isAlreadySignedIn();
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
            <CartContext.Provider value={cartContext}>
              {!isLoggedIn ? <AuthNavigator /> : <TabNavigator />}
              <ErrorModal
                isOpen={showErrorModal}
                onClose={setShowErrorModal}
                title="Network Error"
                error="No Internet Connection. Try again later."
              />
            </CartContext.Provider>
          </AuthContext.Provider>
        </NavigationContainer>
      </View>
    </NativeBaseProvider>
  );
}
