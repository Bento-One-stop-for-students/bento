import React from "react";
import auth, { firebase } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin"; 

const Auth = () => {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

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
    setIsLoading(true);
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    }
    await GoogleSignin.hasPlayServices();
    try {
      const userInfo = await GoogleSignin.signIn();
      if (userInfo.user.email.includes("@nitj.ac.in")) {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            setUser(user);
          }
          setIsLoggedIn(true);
        });
      }
    } catch (error) {}
    setIsLoading(false);
  }

  async function signUp(navigation) {
    // Check if your device supports Google Play
    // setIsLoading(true);
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    }
    await GoogleSignin.hasPlayServices();
    try {
      const userInfo = await GoogleSignin.signIn();
      if (userInfo.user.email.includes("@nitj.ac.in")) {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            setUser(user);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
    navigation.navigate('register')
    // setIsLoading(false);
  }

  async function checkSignedIn() {
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        firebase.auth().onAuthStateChanged((user) => {
          setUser(user);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function signOut() {
    setIsLoading(true);
    try {
      await GoogleSignin.signOut();
      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  const authContext = React.useMemo(() => ({
    signIn,
    signUp,
    signOut,
    checkSignedIn,
    user,
    isLoggedIn,
    isLoading,
    setUser,
    setIsLoggedIn,
    setIsLoading,
  }));
  return {
    authContext,
    signIn,
    signUp,
    signOut,
    checkSignedIn,
    user,
    isLoggedIn,
    isLoading,
    setUser,
    setIsLoggedIn,
    setIsLoading,
  };
};

export default Auth;
