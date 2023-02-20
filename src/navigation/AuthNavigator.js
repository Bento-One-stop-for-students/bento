import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../screens/login/signIn";
import SignUp from "../screens/login/signUp";
import Register from "../screens/login/register";

const Auth = createNativeStackNavigator();

const AuthNavigator = () => {
  const isLoggedIn = true;
  return (
    <Auth.Navigator screenOptions={{headerShown:false}} initialRouteName="sign-up">
      <Auth.Screen name="sign-up" component={SignUp} />
      <Auth.Screen name="register" component={Register} />
      <Auth.Screen name="sign-in" component={SignIn} />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
