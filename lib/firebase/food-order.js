import axios from "axios";
import firestore from "@react-native-firebase/firestore";
import Constants from "expo-constants";
const env = Constants.expoConfig.extra.firebaseEnv.trim();
const firebaseUrl = Constants.expoConfig.extra.firebaseUrl;
const database = firestore();

// get all food items

export const getAllFoodItems = (setState) => {
  database.collection(`bento/${env}/food`).onSnapshot((success, error) => {
    const foodItems = success.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    setState(foodItems);
  });
};

// create food order

export const createUserOrder = async (data) => {
  try {
    const { id, ...rest } = data;
    const res = await axios.post(
      `${firebaseUrl}/snackmen/order/${id}`,
      { ...rest }
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

// get all user orders

export const getUserOrders = async (id) => {
  try {
    const allUserOrder = await database
      .collection(`bento/${env}/users/${id}/orders`)
      .orderBy("timestamp", "desc")
      .get();
    const allOrder = allUserOrder.docs.map((order) => ({
      orderId: order.id,
      ...order.data(),
    }));
    return allOrder;
  } catch (err) {
    throw err;
  }
};

// cancel user order

export const cancelUserOrder = async (userId, orderId) => {
  try {
    await axios.delete(
      `${firebaseUrl}/snackmen/order/delete?userId=${userId}&orderId=${orderId}`
    );
  } catch (err) {
    throw err;
  }
};
