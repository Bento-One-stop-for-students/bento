import {
  doc,
  getDocs,
  collection,
  query,
  where,
  addDoc,
  deleteDoc,
  serverTimestamp,
***REMOVED*** from "firebase/firestore";
import { db ***REMOVED*** from "./firebaseConfig";

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

export const createOrder = async (data) => {
***REMOVED***
    const { id, ...rest ***REMOVED*** = data;
    const userOrder = {
      ...rest,
      is_delivered: false,
      timestamp: serverTimestamp(),
***REMOVED***;
    const add = await addDoc(collection(db, `users/${id***REMOVED***/orders`), userOrder);
    return add.id;
***REMOVED*** catch (err) {
    console.log(err);
***REMOVED***
***REMOVED***

export const getUserOrders = async (id) => {
***REMOVED***
    const q = query(collection(db, "orders"), where("id", "==", id));
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
