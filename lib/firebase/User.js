import { db } from "./firebaseConfig";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
  collection,
} from "firebase/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";

export const createUser = async (data, id) => {
  try {
    await setDoc(
      doc(db, "users", id),
      { time_stamp: serverTimestamp(), ...data },
      { merge: true }
    );
  } catch (err) {
    throw err;
  }
};

export const editUser = async (data, id) => {
  try {
    await setDoc(doc(db, "users", id), data, { merge: true });
    const updatedUser = await getUser(id);
    return updatedUser;
  } catch (err) {
    throw err;
  }
};

export const getUser = async (id) => {
  try {
    const docRef = doc(db, "users", id);
    const res = await getDoc(docRef);
    return res.data();
  } catch (err) {
    throw err;
  }
};

export const getStatus = () => {
  const query = collection(db, "status");
  const [status, statusLoading] = useCollectionData(query);
  return { status, statusLoading };
};
