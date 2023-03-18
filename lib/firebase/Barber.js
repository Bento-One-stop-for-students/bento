import axios from "axios";
import firestore from "@react-native-firebase/firestore";
import Constants from "expo-constants";
const env= Constants.expoConfig.extra.firebaseEnv.trim();
const database = firestore();

//Get barber appointment of a user

export const getBarberBooking = (id, setBarberBooking, setBarberLoading) => {
  database
    .collection(`bento/${env}/barber`)
    .doc(id)
    .onSnapshot((success, error) => {
      setBarberBooking(success.data());
      setBarberLoading(error);
    });
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
    await database.collection(`bento/${env}/barber`).doc(id).delete();
  } catch (err) {
    throw err;
  }
};

// get waiting queue length

export const getWaitingQueueLength = (setWaitingQueue) => {
  database
    .collection(`bento/${env}/globalVariable`)
    .onSnapshot((success, error) => {
      const res = success.docs.map((doc) => {
        return { ...doc.data() };
      });
      setWaitingQueue(res[0].queue_length);
    });
};
