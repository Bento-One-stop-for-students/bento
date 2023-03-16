import {
  doc,
  getDocs,
  collection,
  query,
  deleteDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebaseConfig";
import axios from "axios";

// get all food items

export const getAllFoodItems = async () => {
  try {
    let foodItems = [];
    const items = await getDocs(collection(db, "food"));
    items.forEach((item) => foodItems.push({ id: item.id, ...item.data() }));
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
    const q = query(
      collection(db, `users/${id}/orders`),
      orderBy("timestamp", "desc")
    );
    const allUserOrder = await getDocs(q);
    const allOrder = [];
    allUserOrder.forEach((order) =>
      allOrder.push({ orderId: order.id, ...order.data() })
    );
    return allOrder;
  } catch (err) {
    throw err;
  }
};

export const cancelUserOrder = async (userId, orderId) => {
  try {
    const delete1 = deleteDoc(doc(db, `users/${userId}/orders/${orderId}`));
    const delete2 = deleteDoc(doc(db, "todayOrders", orderId));
    await Promise.all([delete1, delete2]);
  } catch (err) {
    throw err;
  }
};
