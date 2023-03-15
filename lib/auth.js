import React from "react";
import { getUser } from "./firebase/user";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId:
    "864652401846-tai9latbdbms7o0solohb8n9a0kf1g0o.apps.googleusercontent.com",
});

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

export async function handleGoogleProviderLogin(authDispatch) {
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
      authDispatch({
        type: "SIGN_IN",
        payload: {
          user: res,
        },
      });
      return false;
    } else {
      return userInfo.user;
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

export async function handleIsSignedIn(authDispatch) {
  try {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      const currentUser = await GoogleSignin.getCurrentUser();
      const res = await verifyUser(currentUser.user);
      if (res) {
        authDispatch({
          type: "SIGN_IN",
          payload: {
            user: res,
          },
        });
        return true;
      } else {
        throw { error: "no signed in account found" };
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function handleSignOut(authDispatch) {
  try {
    await GoogleSignin.signOut();
    authDispatch({
      type: "SIGN_OUT",
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
