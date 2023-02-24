import { db } from "./firebaseConfig";
import { doc, serverTimestamp, setDoc, getDoc } from "firebase/firestore";

export const createUser = async (user, id) => {
  try {
    await setDoc(doc(db, "users", id), user, { merge: true });
  } catch (err) {
    return { error: "Error occured while signing up" };
  }

  return { sucess: "Successfully created new user" };
};

export const getUser = async (id) => {
  try {
    const docRef = doc(db, "users", id);
    const res =  await getDoc(docRef);
    return res.data();
  } catch (err) {
    console.log(err);
  }
};
