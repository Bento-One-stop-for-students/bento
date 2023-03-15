import axios from "axios";
import { AuthContext ***REMOVED*** from "../context/authContext.js";
import { db ***REMOVED*** from "./firebaseConfig.js";
import { doc, deleteDoc, getDoc ***REMOVED*** from "firebase/firestore";

//Get barber appointment of a user

export const getBarberBooking = async (id) => {
***REMOVED***
    const booking = await getDoc(doc(db, "barber", id));
    return { ...booking.data() ***REMOVED***
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

//Book Appointment from barber

export const bookBarber = async (user) => {
  const { id ***REMOVED*** = user;
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
