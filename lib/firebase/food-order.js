import axios from "axios";
import firestore from "@react-native-firebase/firestore";
const database = firestore();
const env = process.env.FIREBASE_ENV.trimEnd();

// get all food items

export const getAllFoodItems = async () => {
  try {
    const items = await database.collection(`bento/${env}/food`).get();
    const foodItems = items.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    return foodItems;
  } catch (err) {
    throw err;
  }
};

// create food order

export const createUserOrder = async (data) => {
  try {
    const { id, ...rest } = data;
    const res = await axios.post(
      `https://us-central1-bento-5ad4e.cloudfunctions.net/app/api/order/${id}`,
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

export const cancelUserOrder = async (userId, orderId) => {
  try {
    const delete1 = database
      .doc(`bento/${env}/users/${userId}/orders/${orderId}`)
      .delete();
    const delete2 = database
      .collection(`bento/${env}/todayOrders`)
      .doc(orderId)
      .delete();
    await Promise.all([delete1, delete2]);
  } catch (err) {
    throw err;
  }
};
