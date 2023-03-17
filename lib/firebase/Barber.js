import axios from "axios";
import firestore from "@react-native-firebase/firestore";
const database = firestore();
const env=process.env.FIREBASE_ENV.trimEnd();

//Get barber appointment of a user

export const getBarberBooking = (id, setBarberBooking, setBarberLoading) => {
  database
    .collection(`bento/${env***REMOVED***/barber`)
    .doc(id)
    .onSnapshot((success, error) => {
      setBarberBooking(success.data());
      setBarberLoading(error);
    ***REMOVED***
***REMOVED***

//Book Appointment from barber

export const bookBarber = async (id, token) => {
***REMOVED***
    const res = await axios.post(
      `https://us-central1-bento-5ad4e.cloudfunctions.net/app/api/book/${id***REMOVED***`,
      token
    );
    return res.data;
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

//delete barber appointment

export const deleteBarberBooking = async (id) => {
***REMOVED***
    await database.collection(`bento/${env***REMOVED***/barber`).doc(id).delete();
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

// get waiting queue length

export const getWaitingQueueLength = (setWaitingQueue) => {
  database
    .collection(`bento/${env***REMOVED***/globalVariable`)
    .onSnapshot((success, error) => {
      const res = success.docs.map((doc) => {
        return { ...doc.data() ***REMOVED***
      ***REMOVED***
      setWaitingQueue(res[0].queue_length);
    ***REMOVED***
***REMOVED***
