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
  const { status, statusLoading ***REMOVED*** = getStatus();
  const { booking, bookingLoading ***REMOVED*** = getBarberBooking(authState.user.id);
  const { waitingQueueLength, waitingQueueLengthLoading ***REMOVED*** =
    getWaitingQueueLength();

  const [barberWaitingQueueLength, setBarberWaitingQueueLength] =
    React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [barberBooking, setBarberBooking] = React.useState(false);
  const [barberStatus, setIsBarberOpen] = React.useState("CLOSED");
  const [snackmenStatus, setIsSnackmenOpen] = React.useState("CLOSED");

  var size = Object.keys(cartState.cart).length;

  React.useEffect(() => {
    if (!statusLoading) {
      setIsBarberOpen(status[0].status);
      setIsSnackmenOpen(status[1].status);
***REMOVED***
***REMOVED***, [status, statusLoading]);

  React.useEffect(() => {
    if (!bookingLoading) {
      setBarberBooking(booking);
***REMOVED***
***REMOVED***, [booking, bookingLoading]);

  React.useEffect(() => {
    if (!waitingQueueLengthLoading) {
      barberWaitingQueueLength(waitingQueueLength);
***REMOVED***
***REMOVED***, [waitingQueueLength, waitingQueueLengthLoading]);

  React.useEffect(() => {
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
      <TextBox
        semibold
        classNames="text-[#353232] text-[110px] w-[200vw] text-center absolute"
        style={{ includeFontPadding: false, lineHeight: 150 ***REMOVED******REMOVED***
      >
        BENTO
      </TextBox>
      <View className="flex-row items-center justify-end w-full mt-16 mr-10">
        <Pressable
          className=" pl-4 pt-3 mr-5"
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
            classNames="text-[#FFA410] text-md bg-[#1E1b1b] px-2 pt-1 rounded-full absolute"
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
      <View className="w-full ml-14">
        <TextBox semibold classNames={"text-white mt-12 text-3xl w-[80vw]"***REMOVED***>
          Hi, {authState.user ? authState.user.name.split(" ")[0] : ""***REMOVED***👋
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
    </View>
  );
***REMOVED***

export default Home;
