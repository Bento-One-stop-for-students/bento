import React from "react";
import { createNativeStackNavigator ***REMOVED*** from "@react-navigation/native-stack";

import SignIn from "../screens/login/signIn";
import SignUp from "../screens/login/signUp";

const Auth = createNativeStackNavigator();

const AuthNavigator = () => {
  const isLoggedIn = true;
  return (
    <Auth.Navigator screenOptions={{headerShown:false***REMOVED******REMOVED***>
      <Auth.Screen name="sign-in" component={SignIn***REMOVED*** />
      <Auth.Screen name="sign-up" component={SignUp***REMOVED*** />
    </Auth.Navigator>
  );
***REMOVED***

export default AuthNavigator;
