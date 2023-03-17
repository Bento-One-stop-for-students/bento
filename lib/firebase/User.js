import firestore from "@react-native-firebase/firestore";
import axios from "axios";
const database = firestore();
const env = process.env.FIREBASE_ENV.trimEnd();
console.log(env);

// create new User

export const createUser = async (id, data) => {
***REMOVED***
    const res = await axios.post(
      `https://us-central1-bento-5ad4e.cloudfunctions.net/app/api/user/signup/${id***REMOVED***`,
      data
    );
    return res.data;
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

// edit existing user

export const editUser = async (id, data) => {
***REMOVED***
    const res = await axios.put(
      `https://us-central1-bento-5ad4e.cloudfunctions.net/app/api/user/update/${id***REMOVED***`,
      data
    );
    return res.data;
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

// get User data

export const getUser = async (id) => {
***REMOVED***
    console.log(`bento/${env***REMOVED***/users`);
    const user = await database.collection(`bento/${env***REMOVED***/users`).doc(id).get();
    console.log({ "get user": user ***REMOVED***
    return user.data();
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

// get Barber & Snackmen Status

export const getStatus = (setBarberState, setSnackmenStatus, setLoading) => {
  database.collection(`bento/${env***REMOVED***/status`).onSnapshot((success, error) => {
    const res = success.docs.map((doc) => {
      return { ...doc.data() ***REMOVED***
    ***REMOVED***
    setBarberState(res[0].status);
    setSnackmenStatus(res[1].status);
    setLoading(error);
  ***REMOVED***
***REMOVED***
