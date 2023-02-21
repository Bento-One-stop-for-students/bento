import React from "react";

import { View ***REMOVED*** from "react-native";
import { NavigationContainer ***REMOVED*** from "@react-navigation/native";
import { useSafeAreaInsets ***REMOVED*** from "react-native-safe-area-context";

import TabNavigator from "./navigation/TabNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import { NativeBaseProvider ***REMOVED*** from "native-base";
import GetStarted from "./splashScreen";
import { AuthContext ***REMOVED*** from "../hooks/context";

export default function Main() {
  const insets = useSafeAreaInsets();
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState("true");

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken("sddas");
      setIsLoading(false);
***REMOVED***,
    signUp: () => {
      setUserToken(null);
      setIsLoading(false);
***REMOVED***,
    SignOut: () => {
      setUserToken("sddas");
      setIsLoading(false);
***REMOVED***,
***REMOVED***));

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
***REMOVED***, 1000);
***REMOVED***, []);

  if (isLoading) {
    return <GetStarted />;
***REMOVED***

  return (
    <AuthContext.Provider value={authContext***REMOVED***>
      <NativeBaseProvider>
        <View style={{ marginTop: insets.top, flex: 1 ***REMOVED******REMOVED***>
          <NavigationContainer>
            {loggedIn ? <AuthNavigator /> : <TabNavigator />***REMOVED***
          </NavigationContainer>
        </View>
      </NativeBaseProvider>
    </AuthContext.Provider>
  );
***REMOVED***
