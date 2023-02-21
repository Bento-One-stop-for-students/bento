import React from "react";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Auth = () => {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  GoogleSignin.configure({
    webClientId:
      "864652401846-tai9latbdbms7o0solohb8n9a0kf1g0o.apps.googleusercontent.com",
    forceCodeForRefreshToken: true,
  });

  async function signIn() {
    // Check if your device supports Google Play
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    }
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken,
      userInfo.accessToken
    );
    setIsLoading(true);
    const signedInUser = auth().signInWithCredential(googleCredential);
    signedInUser
      .then((user) => {
        if (user.additionalUserInfo.profile.email.includes("nitj.ac.in")) {
          setUser(userInfo);
          console.log(userInfo);
          setIsLoading(false);
          setIsLoggedIn(true);
        }
      })
      .catch((error) => console.log(error));
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
    signOut,
    isSignedIn,
    isLoading,
  }));

  return {
    authContext,
    user,
    isLoggedIn,
    signIn,
    signOut,
    isSignedIn,
    isLoading,
  };
};

export default Auth;
