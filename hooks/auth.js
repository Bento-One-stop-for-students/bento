import React from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { getUser } from "../lib/firebase/User";

const Auth = () => {
  const [user, setUser] = React.useState(null);
  const [googleUser, setGoogleUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const verifyUser = async (user) => {
    try {
      if (!user.email.includes("nitj.ac.in")) {
        throw { err: "use institute mail" };
      }
      const { id } = user;
      const res = await getUser(id);
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
    try {
      // Check if your device supports Google Play
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      }
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const res = await verifyUser(userInfo.user);
      if (res) {
        setGoogleUser(userInfo.user);
        setIsLoggedIn(true);
        setUser(res);
      } else {
        throw { err: "user does not exists" };
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
  }
  async function handleGoogleSignUp(navigation) {
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      }
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (!userInfo.user.email.includes("@nitj.ac.in")) {
        throw { err: "use institute mail" };
      }
      const res = await verifyUser(userInfo.user);
      if (res) {
        setGoogleUser(userInfo.user);
        setIsLoggedIn(true);
        setUser(res);
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
  }

  async function handleSignedIn() {
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        const currentUser = await GoogleSignin.getCurrentUser();
        const res = await verifyUser(currentUser.user);
        if (res) {
          setGoogleUser(currentUser.user);
          setIsLoggedIn(true);
          setUser(res);
        }
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function handleSignOut() {
    try {
      const res = await GoogleSignin.signOut();
      setIsLoggedIn(false);
      setUser(null);
      setGoogleUser(null);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  const authContext = React.useMemo(() => ({
    handleSignedIn,
    handleGoogleSignIn,
    handleGoogleSignUp,
    handleSignOut,
    user,
    isLoggedIn,
    setUser,
    googleUser,
    setIsLoggedIn,
    setGoogleUser,
  }));
  return {
    handleSignedIn,
    handleGoogleSignIn,
    handleGoogleSignUp,
    authContext,
    handleSignOut,
    user,
    isLoggedIn,
    googleUser,
    setUser,
    setIsLoggedIn,
    setGoogleUser,
  };
};

export default Auth;
