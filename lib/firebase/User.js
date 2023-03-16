import { firebase ***REMOVED*** from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import axios from 'axios'
const database = firestore();

export const createUser = async (id, data) => {
***REMOVED***
    const res = await axios.post(`https://us-central1-bento-5ad4e.cloudfunctions.net/app/api/user/signup/${id***REMOVED***`,data)
    return res.data
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

export const editUser = async (id,data) => {
***REMOVED***
    const res = await axios.put(`https://us-central1-bento-5ad4e.cloudfunctions.net/app/api/user/update/${id***REMOVED***`,data)
    return res.data
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

export const getUser = async (id) => {
***REMOVED***
    const user = await database.collection("users").doc(id).get();
    return user.data();
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

export const getStatus = (setBarberState, setSnackmenStatus, setLoading) => {
  database.collection("status").onSnapshot((success, error) => {
    const res = success.docs.map((doc) => {
      return { ...doc.data() ***REMOVED***
    ***REMOVED***
    setBarberState(res[0].status);
    setSnackmenStatus(res[1].status);
    setLoading(error);
  ***REMOVED***
***REMOVED***
