import React from "react";
import auth, { firebase ***REMOVED*** from "@react-native-firebase/auth";
import {
  GoogleSignin,
  statusCodes,
***REMOVED*** from "@react-native-google-signin/google-signin";
import { db ***REMOVED*** from "../lib/firebase/firebaseConfig";
import { getUser ***REMOVED*** from "../lib/firebase/User";

const Auth = () => {
  const [user, setUser] = React.useState(null);
  const [googleUser, setGoogleUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  ***REMOVED***
***REMOVED***
    getUser(id)
      .then((res) => {
        setIsLoggedIn(true);
        setUser(res);
***REMOVED***
  ***REMOVED***)
      .catch((err) => {
    ***REMOVED***
  ***REMOVED***
      ***REMOVED***
***REMOVED***;

  ***REMOVED***
    webClientId:
      "864652401846-tai9latbdbms7o0solohb8n9a0kf1g0o.apps.googleusercontent.com",
  ***REMOVED***

  async function handleGoogleSignIn() {
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
      setGoogleUser(userInfo.user);
      verifyUser(userInfo.user);
***REMOVED*** catch (error) {
  ***REMOVED***
***REMOVED***
    setIsLoading(false);
***REMOVED***

  async function handleGoogleSignUp(navigation) {
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
      setGoogleUser(userInfo.user);
***REMOVED*** catch (error) {
  ***REMOVED***
***REMOVED***
    setTimeout(() => {
      navigation.navigate("register");
***REMOVED***, 500);
    // setIsLoading(false);
***REMOVED***

  async function handleSignedIn() {
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
        verifyUser(currentUser.user);
  ***REMOVED***
***REMOVED*** catch (error) {
  ***REMOVED***
***REMOVED***
***REMOVED***

  async function handleSignOut() {
    setIsLoading(true);
  ***REMOVED***
***REMOVED***
      setIsLoggedIn(false);
      setUser(null);
      setGoogleUser(null);
***REMOVED*** catch (error) {
  ***REMOVED***
***REMOVED***
    setIsLoading(false);
***REMOVED***

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
***REMOVED***));
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
***REMOVED***;
***REMOVED***

export default Auth;
