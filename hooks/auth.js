import React from "react";
***REMOVED***

import { getUser ***REMOVED*** from "../lib/firebase/User";

const Auth = () => {
  const [user, setUser] = React.useState(null);
  const [googleUser, setGoogleUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
***REMOVED*** catch (error) {
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
  ***REMOVED***
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
        setIsLoggedIn(true);
        setUser(res);
  ***REMOVED*** else {
        throw { err: "user does not exists" ***REMOVED***
  ***REMOVED***
***REMOVED*** catch (error) {
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
***REMOVED***
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
      if (!userInfo.user.email.includes("@nitj.ac.in")) {
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
        setGoogleUser(userInfo.user);
        setIsLoggedIn(true);
        setUser(res);
  ***REMOVED*** else {
        setGoogleUser(userInfo.user);
        setTimeout(() => {
          navigation.navigate("register");
    ***REMOVED***, 500);
  ***REMOVED***
***REMOVED*** catch (error) {
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
***REMOVED***
***REMOVED***

  async function handleSignedIn() {
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
    ***REMOVED***
          setGoogleUser(currentUser.user);
          setIsLoggedIn(true);
          setUser(res);
    ***REMOVED***
  ***REMOVED***
***REMOVED*** catch (error) {
  ***REMOVED***
  ***REMOVED***
***REMOVED***
***REMOVED***

  async function handleSignOut() {
  ***REMOVED***
      const res = await GoogleSignin.signOut();
      setIsLoggedIn(false);
      setUser(null);
      setGoogleUser(null);
***REMOVED*** catch (error) {
  ***REMOVED***
  ***REMOVED***
***REMOVED***
***REMOVED***

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
***REMOVED***));
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
***REMOVED***;
***REMOVED***

export default Auth;
