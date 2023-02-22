import React from "react";
import auth, { firebase } from "@react-native-firebase/auth";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { db } from "../lib/firebase/firebaseConfig";
import { getUser } from "../lib/firebase/User";

const Auth = () => {
  const [user, setUser] = React.useState(null);
  const [googleUser, setGoogleUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const verifyUser = async (user) => {
    const { id } = user;
    getUser(id)
      .then((res) => {
        setIsLoggedIn(true);
        setUser(res);
        return true;
      })
      .catch((err) => {
        console.log(error);
        return false;
      });
  };

  GoogleSignin.configure({
    webClientId:
      "864652401846-tai9latbdbms7o0solohb8n9a0kf1g0o.apps.googleusercontent.com",
  });

  async function handleGoogleSignIn() {
    // Check if your device supports Google Play
    setIsLoading(true);
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    }
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setGoogleUser(userInfo.user);
      verifyUser(userInfo.user);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  async function handleGoogleSignUp(navigation) {
    // Check if your device supports Google Play
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    }
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setGoogleUser(userInfo.user);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      navigation.navigate("register");
    }, 500);
    // setIsLoading(false);
  }

  async function handleSignedIn() {
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        const currentUser = await GoogleSignin.getCurrentUser();
        verifyUser(currentUser.user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    setIsLoading(true);
    try {
      await GoogleSignin.signOut();
      setIsLoggedIn(false);
      setUser(null);
      setGoogleUser(null);
    } catch (error) {
      console.log(error);
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
