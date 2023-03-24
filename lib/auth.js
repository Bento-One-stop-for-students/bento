import { getUser } from "./firebase/user";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Constants from "expo-constants";

const webClientId = Constants.expoConfig.extra.webClientId.trim();

GoogleSignin.configure({
  webClientId,
});

// local checks over email & if user is present in db or not

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

// login function

export async function handleGoogleProviderLogin(authDispatch) {
  try {
    // Check if your device supports Google Play
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    }
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    var userInfo = await GoogleSignin.signIn();
    // register user in firebase
    const userCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
    const firebaseUser = await auth().signInWithCredential(userCredential);
    const updatedUserInfo = { ...userInfo.user, id: firebaseUser.user.uid };
    console.log(updatedUserInfo);
    const res = await verifyUser(updatedUserInfo);
    if (res) {
      authDispatch({
        type: "SIGN_IN",
        payload: {
          user: res,
        },
      });
      return false;
    } else {
      return updatedUserInfo;
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

// check if user is already signed in

export async function handleIsSignedIn(authDispatch) {
  try {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      auth().onAuthStateChanged(async (user) => {
        const res = await verifyUser({ id: user.uid, email: user.email });
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
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// sign out function

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
