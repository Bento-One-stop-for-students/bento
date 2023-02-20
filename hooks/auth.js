import {
  GoogleSignin,
  GoogleSigninButton,
***REMOVED*** from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { useState ***REMOVED*** from "react";

const handleMail = (mail) => {
  return mail.includes("nitj.ac.in") ? true : false;
***REMOVED***

const Auth = () => {
  const [user, setUser] = useState();
  const [isValid, setIsValid] = useState(false);

  ***REMOVED***
    webClientId:
      "864652401846-tai9latbdbms7o0solohb8n9a0kf1g0o.apps.googleusercontent.com",
    forceCodeForRefreshToken: true,
  ***REMOVED***

  async function onGoogleButtonPress() {
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
    const signedInUser = auth().signInWithCredential(googleCredential);
    signedInUser
      .then((user) => {
        if (handleMail(user.additionalUserInfo.profile.email)) {
          setIsValid(true);
          setUser(user);
    ***REMOVED***

        console.log(isValid)
  ***REMOVED***)
      .catch((error) => console.log(error));
***REMOVED***

  return {user,isValid,onGoogleButtonPress***REMOVED***
***REMOVED***

export default Auth;
