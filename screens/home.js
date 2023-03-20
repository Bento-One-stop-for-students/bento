import React from "react";
import { View ***REMOVED*** from "react-native";
import { Feather ***REMOVED*** from "@expo/vector-icons";
import { TouchableHighlight ***REMOVED*** from "react-native-gesture-handler";

import TextBox from "../components/TextBox";
import { AuthContext ***REMOVED*** from "../lib/context/authContext";
import { Pressable ***REMOVED*** from "react-native";
import { CartContext ***REMOVED*** from "../lib/context/cartContext";
import { getStatus ***REMOVED*** from "../lib/firebase/user";
import {
  getBarberBooking,
  getWaitingQueueLength,
***REMOVED*** from "../lib/firebase/barber";
import Barber from "../components/home/Barber";
import SnackMen from "../components/home/SnackMen";
import { getUserOrders ***REMOVED*** from "../lib/firebase/food-order";

const Home = ({ navigation ***REMOVED***) => {
  const { authState, authDispatch ***REMOVED*** = React.useContext(AuthContext);
  const { value ***REMOVED*** = React.useContext(CartContext);
  const { cartState ***REMOVED*** = value;
  const [barberWaitingQueueLength, setBarberWaitingQueueLength] =
    React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [statusLoading, setStatusLoading] = React.useState(true);
  const [barberBooking, setBarberBooking] = React.useState(false);
  const [barberStatus, setBarberStatus] = React.useState("CLOSED");
  const [snackmenStatus, setSnackmenStatus] = React.useState("CLOSED");
  var size = Object.keys(cartState.cart).length;

  React.useEffect(() => {
    getWaitingQueueLength(setBarberWaitingQueueLength);
    getBarberBooking(authState.user.id, setBarberBooking, setIsLoading);
    getStatus(setBarberStatus, setSnackmenStatus, setStatusLoading);
    const getInfoFromFirebase = async () => {
    ***REMOVED***
        setIsLoading(true);
        const orders = await getUserOrders(authState.user.id);
  ***REMOVED*** type: "GET_ORDERS", payload: orders ***REMOVED***
  ***REMOVED*** catch (err) {
        console.log(err);
  ***REMOVED*** finally {
        setIsLoading(false);
  ***REMOVED***
***REMOVED***;
    getInfoFromFirebase();
***REMOVED***, []);

  return (
    <View className="flex-1 items-center justify-start">
      <View className="flex-center items-center w-full pt-2">
        <TextBox
          semibold
          classNames="text-primary-black text-[100px] w-[110vw] text-center"
          style={{
            includeFontPadding: false,
            paddingTop: 100,
            fontFamily: "Poppins_700Bold",
      ***REMOVED******REMOVED***
        >
          BENTO
        </TextBox>
        <View className="flex-row items-center justify-end w-full h-full pr-10 absolute">
          <Pressable
            className=" pl-3 pt-3 mr-5 pb-3"
            onPress={() => {
              navigation.navigate("Cart");
        ***REMOVED******REMOVED***
          >
            <Feather
              name="shopping-cart"
              style={{ transform: [{ rotateY: "180deg" ***REMOVED***] ***REMOVED******REMOVED***
              size={35***REMOVED***
              color="white"
            />
            <TextBox
              semibold
              classNames="text-primary-snackmen  text-md bg-[#1E1b1b] px-2 pt-1 rounded-full absolute"
            >
              {size***REMOVED***
            </TextBox>
          </Pressable>
          <TouchableHighlight
            onPress={() => {
              navigation.openDrawer();
        ***REMOVED******REMOVED***
          >
            <>
              <View className="w-10 h-2 m-1 bg-white" />
              <View className="w-10 h-2 m-1 bg-white" />
              <View className="w-10 h-2 m-1 bg-white" />
            </>
          </TouchableHighlight>
        </View>
      </View>
      <View className="w-full mt-2 ml-14">
        <TextBox semibold classNames={"text-white text-3xl w-[80vw]"***REMOVED***>
          Hi, {authState.user.name && authState.user.name.split(" ")[0]***REMOVED***👋
        </TextBox>
      </View>
      <Barber
        isLoading={isLoading***REMOVED***
        statusLoading={statusLoading***REMOVED***
        barberStatus={barberStatus***REMOVED***
        barberBooking={barberBooking***REMOVED***
        barberWaitingQueueLength={barberWaitingQueueLength***REMOVED***
      />
      <SnackMen navigation={navigation***REMOVED*** snackmenStatus={snackmenStatus***REMOVED*** />
      <TextBox classNames="text-white w-full pl-5 pt-2 opacity-40">
        v1.0.0
      </TextBox>
    </View>
  );
***REMOVED***

export default Home;
