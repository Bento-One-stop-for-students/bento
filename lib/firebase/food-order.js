import {
  doc,
  getDocs,
  collection,
  query,
  where,
  addDoc,
  deleteDoc,
  serverTimestamp,
  loadBundle,
***REMOVED*** from "firebase/firestore";
import { db ***REMOVED*** from "./firebaseConfig";
import axios from "axios";

// get all food items

export const getAllFoodItems = async () => {
***REMOVED***
    let foodItems = [];
    const items = await getDocs(collection(db, "food"));
    items.forEach((item) => foodItems.push({ id: item.id, ...item.data() ***REMOVED***));
    return foodItems;
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

// create food order

export const createUserOrder = async (data) => {
***REMOVED***
    const { id, ...rest ***REMOVED*** = data;
    const res = await axios.post(
      `https://us-central1-bento-5ad4e.cloudfunctions.net/app/api/order/${id***REMOVED***`,
      { ...rest ***REMOVED***
    );
    return res.data;
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

// get all user orders

export const getUserOrders = async (id) => {
***REMOVED***
    const q = query(collection(db, `users/${id***REMOVED***/orders`));
    const allUserOrder = await getDocs(q);
    const allOrder = [];
    allUserOrder.forEach((order) =>
      allOrder.push({ orderId: order.id, ...order.data() ***REMOVED***)
    );
    return allOrder;
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***

export const cancelUserOrder = async (userId, orderId) => {
***REMOVED***
    const delete1 = deleteDoc(
      doc(db, `users/${userId***REMOVED***/orders/${orderId***REMOVED***`)
    );
    const delete2 = deleteDoc(doc(db, "todayOrders", orderId));
    await Promise.all([delete1, delete2]);
***REMOVED*** catch (err) {
    throw err;
***REMOVED***
***REMOVED***
