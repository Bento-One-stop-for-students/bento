import { db ***REMOVED*** from "./firebaseConfig";
import { doc, serverTimestamp, setDoc, getDoc ***REMOVED*** from "firebase/firestore";

export const createUser = async (user, uid) => {
***REMOVED***
    await setDoc(doc(db, "users", uid), user, { merge: true ***REMOVED***
***REMOVED*** catch (err) {
    return { error: "Error occured while signing up" ***REMOVED***
***REMOVED***

  return { sucess: "Successfully created new user" ***REMOVED***
***REMOVED***

export const getUser = async (uid) => {
***REMOVED***
    const docRef = doc(db, "users", uid);
    const res =  await getDoc(docRef);
    return res.data();
***REMOVED*** catch (err) {
    console.log(err);
***REMOVED***
***REMOVED***
