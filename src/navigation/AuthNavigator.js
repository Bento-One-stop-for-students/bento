import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../screens/login/signIn";
import SignUp from "../screens/login/signUp";

const Auth = createNativeStackNavigator();

const AuthNavigator = () => {
  const isLoggedIn = true;
  return (
    <Auth.Navigator screenOptions={{headerShown:false}}>
      <Auth.Screen name="sign-in" component={SignIn} />
      <Auth.Screen name="sign-up" component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
