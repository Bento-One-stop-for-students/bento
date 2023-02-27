import React from "react";

import { NativeBaseProvider ***REMOVED*** from "native-base";
import { View, ActivityIndicator ***REMOVED*** from "react-native";
import { NavigationContainer ***REMOVED*** from "@react-navigation/native";
import { useSafeAreaInsets ***REMOVED*** from "react-native-safe-area-context";

import TabNavigator from "./navigation/TabNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import GetStarted from "./splashScreen";
import { AuthContext, CartContext ***REMOVED*** from "../hooks/context";
import Auth from "../hooks/auth";
import Cart from "../hooks/cart";
import NetInfo from "@react-native-community/netinfo";
import ErrorModal from "./components/shared/styles/ErrorModal";

export default function Main() {
  const insets = useSafeAreaInsets();

  const [isConnected, setIsConnected] = React.useState(false);
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  const [splashScreen, setSplashScreen] = React.useState(true);
  const { cartContext ***REMOVED*** = Cart();
  const { authContext, user, isLoggedIn, handleSignedIn, googleUser ***REMOVED*** = Auth();

  React.useEffect(() => {
    console.log({ user, isLoggedIn, googleUser ***REMOVED***
***REMOVED***, [user, googleUser]);

  const isAlreadySignedIn = async () => {
  ***REMOVED***
      NetInfo.fetch().then((state) => {
        setIsConnected(state.isConnected);
      ***REMOVED***
      if (isConnected) {
        setShowErrorModal(true);
  ***REMOVED***
      await handleSignedIn();
      setTimeout(() => {
        setSplashScreen(false);
  ***REMOVED***, 500);
***REMOVED*** catch (err) {
      console.log(err);
      setSplashScreen(false);
***REMOVED***
***REMOVED***;

  React.useEffect(() => {
    isAlreadySignedIn();
***REMOVED***, []);
  return splashScreen ? (
    <GetStarted />
  ) : (
    <NativeBaseProvider>
      <View
        style={{ marginTop: insets.top, flex: 1, backgroundColor: "white" ***REMOVED******REMOVED***
      >
        <NavigationContainer>
          <AuthContext.Provider value={authContext***REMOVED***>
            <CartContext.Provider value={cartContext***REMOVED***>
              {!isLoggedIn ? <AuthNavigator /> : <TabNavigator />***REMOVED***
              <ErrorModal
                isOpen={showErrorModal***REMOVED***
                onClose={setShowErrorModal***REMOVED***
                title="Network Error"
                error="No Internet Connection. Try again later."
              />
            </CartContext.Provider>
          </AuthContext.Provider>
        </NavigationContainer>
      </View>
    </NativeBaseProvider>
  );
***REMOVED***
