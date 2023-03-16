import axios from "axios";
import { db } from "./firebaseConfig.js";
import { doc, deleteDoc, collection } from "firebase/firestore";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

//Get barber appointment of a user

export const getBarberBooking = (id) => {
  const query = doc(db, "barber", id);
  const [booking, bookingLoading] = useDocumentData(query);
  return { booking, bookingLoading };
};

//Book Appointment from barber

export const bookBarber = async (id, token) => {
  try {
    const res = await axios.post(
      `https://us-central1-bento-5ad4e.cloudfunctions.net/app/api/book/${id}`,
      token
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

//delete barber appointment
export const deleteBarberBooking = async (id) => {
  try {
    await deleteDoc(doc(db, "barber", id));
  } catch (err) {
    throw err;
  }
};

// get waiting queue length
export const getWaitingQueueLength = () => {
  const query = collection(db, "globalVariable");
  const [waitingQueueLength, waitingQueueLengthLoading] =
    useCollectionData(query);
  return { waitingQueueLength, waitingQueueLengthLoading };
};
