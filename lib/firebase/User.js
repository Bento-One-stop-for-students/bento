import firestore from "@react-native-firebase/firestore";
import axios from "axios";
import Constants from "expo-constants";
const env = Constants.expoConfig.extra.firebaseEnv.trim();
const database = firestore();

// create new User

export const createUser = async (id, data) => {
  try {
    const res = await axios.post(
      `https://us-central1-bento-5ad4e.cloudfunctions.net/app/api/user/signup/${id}`,
      data
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

// edit existing user

export const editUser = async (id, data) => {
  try {
    const res = await axios.put(
      `https://us-central1-bento-5ad4e.cloudfunctions.net/app/api/user/update/${id}`,
      data
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

// get User data

export const getUser = async (id) => {
  try {
    console.log(`bento/${env}/users`);
    const user = await database.collection(`bento/${env}/users`).doc(id).get();
    console.log({ "get user": user });
    return user.data();
  } catch (err) {
    throw err;
  }
};

// get Barber & Snackmen Status

export const getStatus = (setBarberState, setSnackmenStatus, setLoading) => {
  database.collection(`bento/${env}/status`).onSnapshot((success, error) => {
    const res = success.docs.map((doc) => {
      return { ...doc.data() };
    });
    setBarberState(res[0].status);
    setSnackmenStatus(res[1].status);
    setLoading(error);
  });
};
