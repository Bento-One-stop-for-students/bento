import React from "react";
import auth from "@react-native-firebase/auth";
***REMOVED***

const Auth = () => {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  ***REMOVED***
    webClientId:
      "864652401846-tai9latbdbms7o0solohb8n9a0kf1g0o.apps.googleusercontent.com",
    forceCodeForRefreshToken: true,
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
    ***REMOVED***
  ***REMOVED***)
      .catch((error) => console.log(error));
***REMOVED***

  async function isSignedIn(idToken, accessToken) {
    setIsLoading(true);
    const googleCredential = auth.GoogleAuthProvider.credential(
      idToken,
      accessToken
    );
    const signedInUser = auth().signInWithCredential(googleCredential);
    signedInUser
      .then((user) => {
        if (user.additionalUserInfo.profile.email.includes("nitj.ac.in")) {
          setUser(userInfo);
          console.log(userInfo);
          setIsLoading(false);
          setIsLoggedIn(true);
    ***REMOVED***
  ***REMOVED***)
      .catch((error) => console.log(error));
***REMOVED***

  signOut = async () => {
    setIsLoading(true);
  ***REMOVED***
***REMOVED***
      setUser(null);
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
***REMOVED***;

  const authContext = React.useMemo(() => ({
    user,
    isLoggedIn,
    signIn,
    signOut,
    isSignedIn,
***REMOVED***));

  return { authContext, isLoading, isLoggedIn, user ***REMOVED***
***REMOVED***

export default Auth;
