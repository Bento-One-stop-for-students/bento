import {
  doc,
  getDocs,
  collection,
  query,
  where,
  addDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

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

export const createOrder = async (data) => {
  try {
    await addDoc(collection(db, "orders"), {
      timeStamp: serverTimestamp(),
      is_delivered: false,
      ...data,
    });
    return true;
  } catch (error) {
    console.log(err);
  }
  return false;
};

export const getUserOrders = async (id) => {
  try {
    const q = query(collection(db, "orders"), where("id", "==", id));
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
