import React from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { getUser } from "../lib/firebase/User";

const Auth = () => {
  const [user, setUser] = React.useState(null);
  const [googleUser, setGoogleUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const verifyUser = async (user) => {
    try {
      const { id } = user;
      const res = await getUser(id);
      if (res) {
        setIsLoggedIn(true);
        setUser(res);
      }
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  GoogleSignin.configure({
    webClientId:
      "864652401846-tai9latbdbms7o0solohb8n9a0kf1g0o.apps.googleusercontent.com",
  });

  async function handleGoogleSignIn() {
    // Check if your device supports Google Play
    setIsLoading(true);
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      }
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const res = await verifyUser(userInfo.user);
      if (res) {
        setIsLoading(false);
        throw { err: "user already exists" };
      } else {
        setGoogleUser(userInfo.user);
      }
    } catch (error) {
      console.log(error);
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      }
      throw error;
    }
    setIsLoading(false);
  }

  async function handleGoogleSignUp(navigation) {
    // Check if your device supports Google Play
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      }
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const res = await verifyUser(userInfo.user);
      if (res) {
        throw { err: "user already exists" };
      } else {
        setGoogleUser(userInfo.user);
        setTimeout(() => {
          navigation.navigate("register");
        }, 500);
      }
    } catch (error) {
      console.log(error);
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      }
      throw error;
    }
    // setIsLoading(false);
  }

  async function handleSignedIn() {
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        const currentUser = await GoogleSignin.getCurrentUser();
        await verifyUser(currentUser.user);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function handleSignOut() {
    setIsLoading(true);
    try {
      const res = await GoogleSignin.signOut();
      console.log({ res });
      setIsLoggedIn(false);
      setUser(null);
      setGoogleUser(null);
    } catch (error) {
      console.log(error);
      throw error;
    }
    setIsLoading(false);
  }

  const authContext = React.useMemo(() => ({
    handleSignedIn,
    handleGoogleSignIn,
    handleGoogleSignUp,
    handleSignOut,
    user,
    isLoggedIn,
    isLoading,
    setUser,
    googleUser,
    setIsLoggedIn,
    setIsLoading,
    setGoogleUser,
  }));
  return {
    handleSignedIn,
    handleGoogleSignIn,
    handleGoogleSignUp,
    authContext,
    handleSignOut,
    user,
    isLoading,
    isLoggedIn,
    googleUser,
    setUser,
    setIsLoggedIn,
    setIsLoading,
    setGoogleUser,
  };
};

export default Auth;
