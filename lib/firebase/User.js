import { firebase } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import axios from 'axios'
const database = firestore();

export const createUser = async (id, data) => {
  try {
    const res = await axios.post(`https://us-central1-bento-5ad4e.cloudfunctions.net/app/api/user/signup/${id}`,data)
    return res.data
  } catch (err) {
    throw err;
  }
};

export const editUser = async (id,data) => {
  try {
    const res = await axios.put(`https://us-central1-bento-5ad4e.cloudfunctions.net/app/api/user/update/${id}`,data)
    return res.data
  } catch (err) {
    throw err;
  }
};

export const getUser = async (id) => {
  try {
    const user = await database.collection("users").doc(id).get();
    return user.data();
  } catch (err) {
    throw err;
  }
};

export const getStatus = (setBarberState, setSnackmenStatus, setLoading) => {
  database.collection("status").onSnapshot((success, error) => {
    const res = success.docs.map((doc) => {
      return { ...doc.data() };
    });
    setBarberState(res[0].status);
    setSnackmenStatus(res[1].status);
    setLoading(error);
  });
};
