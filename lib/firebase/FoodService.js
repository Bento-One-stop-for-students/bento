import {
  doc,
  getDocs,
  collection,
  query,
  where,
  addDoc,
  deleteDoc,
***REMOVED*** from "firebase/firestore";
import { db ***REMOVED*** from "./firebaseConfig";

export const getAllFoodItems = async () => {
***REMOVED***
    let foodItems = [];
    const items = await getDocs(collection(db, "food"));
    items.forEach((item) => foodItems.push(item.data()));
    return foodItems;
***REMOVED*** catch (err) {
    console.log(err);
***REMOVED***
***REMOVED***

export const pushItems = async (data) => {
***REMOVED***
    await addDoc(collection(db, "orderItem"), data);
***REMOVED***
    console.log(error.message);
***REMOVED***
***REMOVED***

export const getUserOrder = async (id) => {
***REMOVED***
    const q = query(collection(db, "orderItem"), where("userId", "==", id));
    const allUserOrder = await getDocs(q);
    const allOrder = [];
    allUserOrder.forEach((order) =>
      allOrder.push({ orderId: order.id, ...order.data() ***REMOVED***)
    );
    return allOrder;
***REMOVED*** catch (er) {
    console.log(er);
***REMOVED***
***REMOVED***

export const getAllOrderItem = async () => {
***REMOVED***
    let allOrderItem = [];
    const items = await getDocs(collection(db, "orderItem"));
    items.forEach((item) => {
      allOrderItem.push({ id: item.id, ...item.data() ***REMOVED***
    ***REMOVED***
    return allOrderItem;
***REMOVED*** catch (err) {
    console.log(err);
***REMOVED***
***REMOVED***
export const deleteOrderItem = async (docId) => {
***REMOVED***
    console.log(docId);
    await deleteDoc(doc(db, "orderItem", docId));
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
