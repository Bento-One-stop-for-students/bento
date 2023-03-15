import axios from "axios";
import { AuthContext } from "../context/authContext.js";
import { db } from "./firebaseConfig.js";
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { matchAtRule } from "nativewind/dist/style-sheet/match-at-rule.js";
import { checkPluginState } from "react-native-reanimated/lib/reanimated2/core.js";

//Get barber appointment of a user

export const getBarberBooking = (id) => {
  const query = doc(db, "barber", id);
  const [booking, bookingLoading] = useDocumentData(query);
  return { booking, bookingLoading };
};

//Book Appointment from barber

export const bookBarber = async (id) => {
  try {
    const res = await axios.post(
      `https://us-central1-bento-5ad4e.cloudfunctions.net/app/api/book/${id}`
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

//delete barber appointment
export const deleteBarberBooking = async(id) => {
  try {
    await deleteDoc(doc(db,'barber',id));
    console.log('booking deleted');
  }catch(err) {
    throw err;
  }
}

// get waiting queue length
export const getWaitingQueueLength = () => {
  const query = collection(db, "globalVariable");
  const [waitingQueueLength, waitingQueueLengthLoading] = useCollectionData(query);
  return { waitingQueueLength, waitingQueueLengthLoading };
};