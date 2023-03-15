import axios from "axios";
import { AuthContext } from "../context/authContext.js";
import { db } from "./firebaseConfig.js";
import { doc, deleteDoc, getDoc } from "firebase/firestore";

//Get barber appointment of a user

export const getBarberBooking = async (id) => {
  try {
    const booking = await getDoc(doc(db, "barber", id));
    return { ...booking.data() };
  } catch (err) {
    throw err;
  }
};

//Book Appointment from barber

export const bookBarber = async (user) => {
  const { id } = user;
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
