import React from "react";
import auth, { firebase ***REMOVED*** from "@react-native-firebase/auth";
***REMOVED*** 

const Auth = () => {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

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
    setIsLoading(true);
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
  ***REMOVED***
  ***REMOVED***
      if (userInfo.user.email.includes("@nitj.ac.in")) {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            setUser(user);
      ***REMOVED***
          setIsLoggedIn(true);
        ***REMOVED***
  ***REMOVED***
***REMOVED*** catch (error) {***REMOVED***
    setIsLoading(false);
***REMOVED***

  async function signUp(navigation) {
***REMOVED***
    // setIsLoading(true);
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
  ***REMOVED***
  ***REMOVED***
      if (userInfo.user.email.includes("@nitj.ac.in")) {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            setUser(user);
      ***REMOVED***
        ***REMOVED***
  ***REMOVED***
***REMOVED*** catch (error) {
  ***REMOVED***
***REMOVED***
    navigation.navigate('register')
    // setIsLoading(false);
***REMOVED***

  async function checkSignedIn() {
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
        firebase.auth().onAuthStateChanged((user) => {
          setUser(user);
        ***REMOVED***
  ***REMOVED***
***REMOVED*** catch (error) {
  ***REMOVED***
***REMOVED***
***REMOVED***

  async function signOut() {
    setIsLoading(true);
  ***REMOVED***
***REMOVED***
      setIsLoggedIn(false);
      setUser(null);
***REMOVED*** catch (error) {
  ***REMOVED***
***REMOVED***
    setIsLoading(false);
***REMOVED***

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
***REMOVED***));
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
***REMOVED***;
***REMOVED***

export default Auth;
