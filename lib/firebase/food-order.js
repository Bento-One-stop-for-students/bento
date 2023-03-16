import axios from "axios";
import firestore from "@react-native-firebase/firestore";
const database = firestore();

// get all food items

export const getAllFoodItems = async () => {
***REMOVED***
    const items = await database.collection('food').get()
    const foodItems = items.docs.map(item => ({id:item.id,...item.data()***REMOVED***));
    return foodItems;
***REMOVED***catch(err) {
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
    const allUserOrder = await database.collection(`users/${id***REMOVED***/orders`).orderBy('timestamp',"desc").get();
    const allOrder = allUserOrder.docs.map(order => ({orderId: order.id,...order.data()***REMOVED***))
    return allOrder
***REMOVED***catch(err) {
    throw err;
***REMOVED***
***REMOVED***

export const cancelUserOrder = async (userId, orderId) => {
***REMOVED***
    const delete1 = database.doc(`users/${userId***REMOVED***/orders/${orderId***REMOVED***`).delete();
    const delete2 = database.collection('todayOrders').doc(orderId).delete();
    await Promise.all([delete1,delete2])
***REMOVED***catch(err) {
    throw err;
***REMOVED***
***REMOVED***
