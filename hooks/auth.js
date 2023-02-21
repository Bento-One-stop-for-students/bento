import React from "react";
import auth from "@react-native-firebase/auth";
***REMOVED***

const Auth = () => {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isSignedUp, setIsSignedUp] = React.useState(false);

  // ***REMOVED***
  //   webClientId:
  //     "864652401846-tai9latbdbms7o0solohb8n9a0kf1g0o.apps.googleusercontent.com",
  //   forceCodeForRefreshToken: true,
  // ***REMOVED***
  ***REMOVED***
    apiKey: "AIzaSyAtoksjwwmh7dN1jGFlAgsigJC4mvnb3uU",
    authDomain: "bento-5ad4e.firebaseapp.com",
    projectId: "bento-5ad4e",
    storageBucket: "bento-5ad4e.appspot.com",
    messagingSenderId: "864652401846",
    appId: "1:864652401846:web:4b331c0ba767e2a85a9a17",
    measurementId: "G-BNV4R6N3EF",
  ***REMOVED***

  async function signIn() {
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
  ***REMOVED***
      setIsLoading(true);
  ***REMOVED***
      setUser(userInfo);
      setIsLoading(false);
      setIsLoggedIn(true);
***REMOVED*** catch (error) {
  ***REMOVED***
      setIsLoading(false);
***REMOVED***
***REMOVED***

  async function signUp() {
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
  ***REMOVED***
  ***REMOVED***
      setUser(userInfo);
***REMOVED*** catch (error) {
  ***REMOVED***
***REMOVED***
    setIsSignedUp(true);
***REMOVED***

  async function isSignedIn() {
    setIsLoading(true);
  ***REMOVED***
  ***REMOVED***
      setIsLoggedIn(isSignedIn);
      setTimeout(
        () => {
          setIsLoading(false);
    ***REMOVED***,
        500 // Remember to remove the user from your app's state as well
      );
***REMOVED*** catch (error) {
  ***REMOVED***
***REMOVED***
***REMOVED***

  async function signOut() {
    setIsLoading(true);
  ***REMOVED***
***REMOVED***
      setUser(null);
      setIsSignedUp(false);
      setIsLoggedIn(false);
      setTimeout(
        () => {
          setIsLoading(false);
    ***REMOVED***,
        500 // Remember to remove the user from your app's state as well
      );
***REMOVED*** catch (error) {
      console.error(error);
***REMOVED***
***REMOVED***

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
***REMOVED***));

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
***REMOVED***;
***REMOVED***

export default Auth;
