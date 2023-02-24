import React from "react";
import { createNativeStackNavigator ***REMOVED*** from "@react-navigation/native-stack";

import SignIn from "../screens/login/signIn";
import SignUp from "../screens/login/signUp";
import Register from "../screens/login/register";

const Auth = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Auth.Navigator
      screenOptions={{ headerShown: false, animation:'slide_from_right',animationDuration:'50' ***REMOVED******REMOVED***
      initialRouteName="sign-in" 
    >
      <Auth.Screen name="sign-in" component={SignIn***REMOVED*** />
      <Auth.Screen name="sign-up" component={SignUp***REMOVED*** />
      <Auth.Screen name="register" component={Register***REMOVED*** />
    </Auth.Navigator>
  );
***REMOVED***

export default AuthNavigator;
