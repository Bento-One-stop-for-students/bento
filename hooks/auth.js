import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { useState } from "react";

const handleMail = (mail) => {
  return mail.includes("nitj.ac.in") ? true : false;
};

const Auth = () => {
  const [user, setUser] = useState();
  const [isValid, setIsValid] = useState(false);

  GoogleSignin.configure({
    webClientId:
      "864652401846-tai9latbdbms7o0solohb8n9a0kf1g0o.apps.googleusercontent.com",
    forceCodeForRefreshToken: true,
  });

  async function onGoogleButtonPress() {
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
    const signedInUser = auth().signInWithCredential(googleCredential);
    signedInUser
      .then((user) => {
        if (handleMail(user.additionalUserInfo.profile.email)) {
          setIsValid(true);
          setUser(user);
        }

        console.log(isValid)
      })
      .catch((error) => console.log(error));
  }

  return {user,isValid,onGoogleButtonPress}
};

export default Auth;
