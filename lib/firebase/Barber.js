import { auth, db ***REMOVED*** from "./firebaseConfig.js";
import {
  setDoc,
  doc,
  query,
  serverTimestamp,
  getDoc,
  getDocs,
  where,
  addDoc,
  collection,
  deleteDoc,
  onSnapshot,
  orderBy,
***REMOVED*** from "firebase/firestore";

import {
  useCollectionData,
  useDocumentData,
***REMOVED*** from "react-firebase-hooks/firestore";

//Get barber appointment of a user
export const getBarberIdFromUser = async (userId) => {
***REMOVED***
    const q = query(collection(db, "barber"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const barberAppointment = [];
    querySnapshot.forEach((doc) => barberAppointment.push({barberId : doc.id, ...doc.data()***REMOVED***));
    return barberAppointment[0];
***REMOVED*** catch (err) {
    console.log(err);
***REMOVED***

  return false
***REMOVED***

//Book Appointment from barber

export const bookBarber = async (data) => {
  const { id, name, hostel, hair, beard, massage, serviceTime ***REMOVED*** = data;

  // check if the barber appointment already exists

***REMOVED***
    const res = await getBarberIdFromUser(id);
    if (!res) {
      await addDoc(collection(db, "barber"), {
        userId: id,
        name,
        hostel,
        hair,
        beard,
        massage,
        serviceTime,
        timestamp: serverTimestamp(),
      ***REMOVED***
      return true;
***REMOVED***
***REMOVED*** catch (err) {
    console.log(err);
***REMOVED***

  return false;
***REMOVED***

//Update barber appointment
export const updateBarberAppointment = async (id, time) => {
***REMOVED***
    //get appointment id
    const appointment = getBarberIdFromUser(id);
    await setDoc(
      doc(db, "barber", appointment.id),
      {
        ...appointment,
        time: time,
        timestamp: serverTimestamp(),
  ***REMOVED***,
      { merge: true ***REMOVED***
    );
***REMOVED*** catch (err) {
    console.log(err);
***REMOVED***
***REMOVED***

//delete barber appointment
export const deleteBarberAppointment = async (id) => {
***REMOVED***
    const appointment = await getBarberIdFromUser(id);
    if (appointment) {
      await deleteDoc(doc(db, "barber", appointment.barberId));
      return true;
***REMOVED***
***REMOVED*** catch (err) {
    console.log(err);
***REMOVED***

  return false;
***REMOVED***

//get all realtime appointments
export const getAllAppointment = async () => {
***REMOVED***
    let appointments = [];
    const unsub = onSnapshot(
      collection(db, "barber", orderBy("timestamp"), (doc) =>
        appointments.push(doc.data())
      )
    );
    return appointments;
    // return { unsub, appointments ***REMOVED***
***REMOVED*** catch (err) {
    console.log(err);
***REMOVED***
***REMOVED***
