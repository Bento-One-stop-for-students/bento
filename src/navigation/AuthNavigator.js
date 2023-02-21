import React from "react";
import { createNativeStackNavigator ***REMOVED*** from "@react-navigation/native-stack";

import SignIn from "../screens/login/signIn";
import SignUp from "../screens/login/signUp";
import Register from "../screens/login/register";

const Auth = createNativeStackNavigator();

const AuthNavigator = () => {
  const isLoggedIn = true;
  return (
    <Auth.Navigator screenOptions={{headerShown:false***REMOVED******REMOVED*** initialRouteName="sign-up">
      <Auth.Screen name="sign-in" component={SignIn***REMOVED*** />
      <Auth.Screen name="sign-up" component={SignUp***REMOVED*** />
      <Auth.Screen name="register" component={Register***REMOVED*** />
    </Auth.Navigator>
  );
***REMOVED***

export default AuthNavigator;
