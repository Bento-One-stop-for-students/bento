import axios from "axios";
import firestore from "@react-native-firebase/firestore";
import Constants from "expo-constants";
const env = Constants.expoConfig.extra.firebaseEnv.trim();
const firebaseUrl = Constants.expoConfig.extra.firebaseUrl;
const database = firestore();

//Get barber appointment of a user

export const getBarberBooking = (id, setBarberBooking, setBarberLoading) => {
  database
    .collection(`bento/${env}/barber`)
    .doc(id)
    .onSnapshot((success, error) => {
      if (success) {
        setBarberBooking(success.data());
      }
      setBarberLoading(error);
    });
};

//Book Appointment from barber

export const bookBarber = async (id, token) => {
  try {
    const res = await axios.post(`${firebaseUrl}/barber/book/${id}`, token);
    return res.data;
  } catch (err) {
    throw err;
  }
};

//delete barber appointment

export const deleteBarberBooking = async (bookingId) => {
  try {
    await axios.delete(`${firebaseUrl}/barber/delete/${bookingId}`);
  } catch (err) {
    throw err;
  }
};

// get waiting queue length

export const getWaitingQueueLength = (setWaitingQueue) => {
  database
    .collection(`bento/${env}/globalVariable`)
    .onSnapshot((success, error) => {
      if (success) {
        const res = success.docs.map((doc) => {
          return { ...doc.data() };
        });
        setWaitingQueue(res[0].queue_length);
      }
    });
};
