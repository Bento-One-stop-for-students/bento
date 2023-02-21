import React from "react";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Auth = () => {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isSignedUp, setIsSignedUp] = React.useState(false);

  // GoogleSignin.configure({
  //   webClientId:
  //     "864652401846-tai9latbdbms7o0solohb8n9a0kf1g0o.apps.googleusercontent.com",
  //   forceCodeForRefreshToken: true,
  // });
  GoogleSignin.configure({
    apiKey: "AIzaSyAtoksjwwmh7dN1jGFlAgsigJC4mvnb3uU",
    authDomain: "bento-5ad4e.firebaseapp.com",
    projectId: "bento-5ad4e",
    storageBucket: "bento-5ad4e.appspot.com",
    messagingSenderId: "864652401846",
    appId: "1:864652401846:web:4b331c0ba767e2a85a9a17",
    measurementId: "G-BNV4R6N3EF",
  });

  async function signIn() {
    // Check if your device supports Google Play
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    }
    await GoogleSignin.hasPlayServices();
    try {
      setIsLoading(true);
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
      setIsLoading(false);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  async function signUp() {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    }
    await GoogleSignin.hasPlayServices();
    try {
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
    } catch (error) {
      console.log(error);
    }
    setIsSignedUp(true);
  }

  async function isSignedIn() {
    setIsLoading(true);
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      setIsLoggedIn(isSignedIn);
      setTimeout(
        () => {
          setIsLoading(false);
        },
        500 // Remember to remove the user from your app's state as well
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function signOut() {
    setIsLoading(true);
    try {
      await GoogleSignin.signOut();
      setUser(null);
      setIsSignedUp(false);
      setIsLoggedIn(false);
      setTimeout(
        () => {
          setIsLoading(false);
        },
        500 // Remember to remove the user from your app's state as well
      );
    } catch (error) {
      console.error(error);
    }
  }

  const authContext = React.useMemo(() => ({
    user,
    isLoggedIn,
    signIn,
    signUp,
    signOut,
    isSignedIn,
    isLoading,
    isSignedUp,
    setIsLoggedIn,
    setIsSignedUp,
  }));

  return {
    authContext,
    user,
    isLoggedIn,
    signIn,
    signUp,
    signOut,
    isSignedIn,
    isLoading,
    isSignedUp,
    setIsLoggedIn,
    setIsSignedUp,
  };
};

export default Auth;
