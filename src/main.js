import React from "react";

import { NativeBaseProvider ***REMOVED*** from "native-base";
import { View, ActivityIndicator ***REMOVED*** from "react-native";
import { NavigationContainer ***REMOVED*** from "@react-navigation/native";
import { useSafeAreaInsets ***REMOVED*** from "react-native-safe-area-context";

import Auth from "../hooks/auth";
import GetStarted from "./splashScreen";
import { CartProvider ***REMOVED*** from "../hooks/cart";
import TabNavigator from "./navigation/TabNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import { AuthContext ***REMOVED*** from "../hooks/context";
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
***REMOVED*** = Auth();

  React.useEffect(() => {
    console.log({ user, isLoggedIn, googleUser ***REMOVED***
***REMOVED***, [user, googleUser]);

  const isAlreadySignedIn = async () => {
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
    NetInfo.addEventListener((state) => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setIsConnected(state.isConnected);
    ***REMOVED***
    isAlreadySignedIn();
***REMOVED***, []);
  return splashScreen ? (
    <GetStarted />
  ) : (
    <NavigationContainer>
      <AuthContext.Provider value={authContext***REMOVED***>
        <CartProvider>
          <View
            style={{ marginTop: insets.top, flex: 1, backgroundColor: "white" ***REMOVED******REMOVED***
          >
            {!isLoggedIn ? <AuthNavigator /> : <TabNavigator />***REMOVED***
            <ErrorModal
              isOpen={!isConnected***REMOVED***
              onClose={setIsConnected***REMOVED***
              title="Network Error"
              error="No Internet Connection. Try again later."
            />
          </View>
        </CartProvider>
      </AuthContext.Provider>
    </NavigationContainer>
  );
***REMOVED***
