import axios from "axios";
import { db ***REMOVED*** from "./firebaseConfig.js";
import { doc, deleteDoc, collection ***REMOVED*** from "firebase/firestore";
import {
  useCollectionData,
  useDocumentData,
***REMOVED*** from "react-firebase-hooks/firestore";

//Get barber appointment of a user

export const getBarberBooking = (id) => {
  const query = doc(db, "barber", id);
  const [booking, bookingLoading] = useDocumentData(query);
  return { booking, bookingLoading ***REMOVED***
***REMOVED***

//Book Appointment from barber

export const bookBarber = async (id) => {
***REMOVED***
    const res = await axios.post(
      `https://us-central1-bento-5ad4e.cloudfunctions.net/app/api/book/${id***REMOVED***`
    );
    return res.data;
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

//delete barber appointment
export const deleteBarberBooking = async (id) => {
***REMOVED***
    await deleteDoc(doc(db, "barber", id));

***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

// get waiting queue length
export const getWaitingQueueLength = () => {
  const query = collection(db, "globalVariable");
  const [waitingQueueLength, waitingQueueLengthLoading] =
    useCollectionData(query);
  return { waitingQueueLength, waitingQueueLengthLoading ***REMOVED***
***REMOVED***
