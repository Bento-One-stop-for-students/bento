import { db ***REMOVED*** from "./firebaseConfig";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
  collection,
***REMOVED*** from "firebase/firestore";

import { useCollectionData ***REMOVED*** from "react-firebase-hooks/firestore";

export const createUser = async (data, id) => {
***REMOVED***
    await setDoc(
      doc(db, "users", id),
      { time_stamp: serverTimestamp(), ...data ***REMOVED***,
      { merge: true ***REMOVED***
    );
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

export const editUser = async (data, id) => {
***REMOVED***
    await setDoc(doc(db, "users", id), data, { merge: true ***REMOVED***
    const updatedUser = await getUser(id);
    return updatedUser;
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

export const getUser = async (id) => {
***REMOVED***
    const docRef = doc(db, "users", id);
    const res = await getDoc(docRef);
    return res.data();
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

export const getStatus = () => {
  const query = collection(db, "status");
  const [status, statusLoading] = useCollectionData(query);
  return { status, statusLoading ***REMOVED***
***REMOVED***
