import { auth, db } from "./firebaseConfig.js";
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
} from "firebase/firestore";

import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

//Get barber appointment of a user
export const getBarberIdFromUser = async (userId) => {
  try {
    const q = query(collection(db, "barber"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const barberAppointment = [];
    querySnapshot.forEach((doc) => barberAppointment.push({barberId : doc.id, ...doc.data()}));
    return barberAppointment[0];
  } catch (err) {
    console.log(err);
  }

  return false
};

//Book Appointment from barber

export const bookBarber = async (data) => {
  const { id, name, hostel, hair, beard, massage, serviceTime } = data;

  // check if the barber appointment already exists

  try {
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
      });
      return true;
    }
  } catch (err) {
    console.log(err);
  }

  return false;
};

//Update barber appointment
export const updateBarberAppointment = async (id, time) => {
  try {
    //get appointment id
    const appointment = getBarberIdFromUser(id);
    await setDoc(
      doc(db, "barber", appointment.id),
      {
        ...appointment,
        time: time,
        timestamp: serverTimestamp(),
      },
      { merge: true }
    );
  } catch (err) {
    console.log(err);
  }
};

//delete barber appointment
export const deleteBarberAppointment = async (id) => {
  try {
    const appointment = await getBarberIdFromUser(id);
    if (appointment) {
      await deleteDoc(doc(db, "barber", appointment.barberId));
      return true;
    }
  } catch (err) {
    console.log(err);
  }

  return false;
};

//get all realtime appointments
export const getAllAppointment = async () => {
  try {
    let appointments = [];
    const unsub = onSnapshot(
      collection(db, "barber", orderBy("timestamp"), (doc) =>
        appointments.push(doc.data())
      )
    );
    return appointments;
    // return { unsub, appointments };
  } catch (err) {
    console.log(err);
  }
};
