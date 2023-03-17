import React from "react";

import { Entypo ***REMOVED*** from "@expo/vector-icons";
import { TouchableHighlight ***REMOVED*** from "react-native-gesture-handler";
import {
  ActivityIndicator,
  View,
  Image,
  Pressable,
  ScrollView,
***REMOVED*** from "react-native";

import Button from "../../components/Button";
import TextBox from "../../components/TextBox";
import { CartContext ***REMOVED*** from "../../lib/context/cartContext";
import { AuthContext ***REMOVED*** from "../../lib/context/authContext";
import { createUserOrder, getUserOrders ***REMOVED*** from "../../lib/firebase/food-order";

const Cart = ({ navigation ***REMOVED***) => {
  const { authDispatch ***REMOVED*** = React.useContext(AuthContext);
  const { value ***REMOVED*** = React.useContext(CartContext);
  const { cartState, cartDispatch ***REMOVED*** = value;
  const { authState ***REMOVED*** = React.useContext(AuthContext);
  const [total, setTotal] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);

  let cartItems = Object.values(cartState.cart);

  React.useEffect(() => {
    const calculateTotal = (items) => {
      let amount = 0;
      items.forEach((item) => {
        amount += item.price * item.qty;
      ***REMOVED***
      setTotal(amount + 5);
***REMOVED***;
    calculateTotal(cartItems);
***REMOVED***, [cartState]);

  const handleCreateOrder = async () => {
  ***REMOVED***
      setDisabled(true);
      const res = await createUserOrder({
        id: authState.user.id,
        name: authState.user.name,
        hostel: authState.user.hostel,
        room_no: authState.user.room_no,
        mobile_no: authState.user.mobile_no,
        total,
        cart: cartItems,
      ***REMOVED***
      const updatedOrders = await getUserOrders(authState.user.id);
***REMOVED*** type: "GET_ORDERS", payload: updatedOrders ***REMOVED***
***REMOVED*** type: "NOTIFICATION_TRUE", payload: res ***REMOVED***
***REMOVED*** catch (err) {
***REMOVED***
        type: "NOTIFICATION_TRUE",
        payload: "Couldn't create order",
      ***REMOVED***
      console.log(err);
***REMOVED*** finally {
      cartDispatch({ type: "EMPTY_CART" ***REMOVED***
      setTimeout(() => {
  ***REMOVED***
          type: "NOTIFICATION_FALSE",
        ***REMOVED***
  ***REMOVED***, 3000);
      setDisabled(false);
      navigation.navigate("Home");
***REMOVED***
***REMOVED***;

  return (
    <View className="flex-1 items-center flex-col">
      <View className="flex-center items-center">
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
        <View className="flex-row items-center w-full h-full absolute">
          <TextBox semibold classNames="text-white text-3xl ml-10">
            Cart
          </TextBox>
        </View>
      </View>
      {cartItems.length < 1 && (
        <TextBox semibold classNames="text-white mt-44">
          Nothing to see here!
        </TextBox>
      )***REMOVED***
      <ScrollView className=" w-full px-5">
        {cartItems.map((item) => {
          return (
            <View
              className="flex-row justify-between items-center w-full my-2 bg-secondary-black  p-2 rounded-2xl"
              key={item.id***REMOVED***
            >
              <View className="flex-row items-center ">
                <Image
                  className=" w-14 h-14  rounded-lg"
                  source={
                    item.imgUrl
                      ? { uri: item.imgUrl ***REMOVED***
                      : require("../../assets/images/no_image.png")
              ***REMOVED***
                  resizeMode="contain"
                />
                <View>
                  <TextBox semibold classNames="text-white ml-5">
                    {item.name***REMOVED***
                  </TextBox>
                  <TextBox semibold classNames="text-white ml-5">
                    ₹ {item.price***REMOVED***
                  </TextBox>
                </View>
              </View>
              <View className="items-center justify-center flex-row ">
                <View className="flex-row w-28 h-12 items-center justify-evenly">
                  <Pressable
                    onPress={() =>
                      cartDispatch({ type: "REDUCE_FROM_CART", payload: item ***REMOVED***)
                ***REMOVED***
                  >
                    <TextBox semibold classNames="p-1 rounded-lg bg-black">
                      <Entypo name="minus" size={15***REMOVED*** color="white" />
                    </TextBox>
                  </Pressable>
                  <TextBox semibold classNames="text-white">
                    {cartState.cart[item.id].qty***REMOVED***
                  </TextBox>
                  <Pressable
                    onPress={() =>
                      cartDispatch({ type: "ADD_TO_CART", payload: item ***REMOVED***)
                ***REMOVED***
                  >
                    <TextBox semibold classNames="p-1 rounded-lg bg-black">
                      <Entypo name="plus" size={15***REMOVED*** color="white" />
                    </TextBox>
                  </Pressable>
                </View>
              </View>
            </View>
          );
    ***REMOVED***)***REMOVED***
      </ScrollView>
      {cartItems.length > 0 && (
        <View className="h-[35vh] w-full bg-secondary-black  rounded-t-3xl top-auto bottom-0 px-5 pt-2 pb-5 justify-evenly">
          <View className="w-full justify-around">
            <TextBox semibold classNames="text-white text-xl">
              {/* {authState.user.name***REMOVED*** */***REMOVED***
              Devesh
            </TextBox>
            <TextBox classNames="text-white">
              {authState.user.hostel.toUpperCase()***REMOVED*** {authState.user.room_no***REMOVED***
            </TextBox>
            <TextBox classNames="text-white">
              {authState.user.phone_no || "No phone no."***REMOVED***
            </TextBox>
          </View>
          <View className="h-[1px] w-full bg-white" />
          <View className="w-full justify-between flex-row">
            <View className="flex-row items-center">
              <TextBox classNames="text-white text-xl">Total</TextBox>
              <TextBox semibold classNames="text-white mt-1 ml-1">
                (₹5 Delivery)
              </TextBox>
            </View>
            <TextBox semibold classNames="text-white text-xl">
              ₹ {total***REMOVED***
            </TextBox>
          </View>
          <Button
            disabled={disabled***REMOVED***
            onPress={handleCreateOrder***REMOVED***
            classNames={`${disabled && "opacity-50"***REMOVED***`***REMOVED***
          >
            {disabled ? (
              <ActivityIndicator size="large" color="#1E1B1B" />
            ) : (
              <TextBox
                semibold
                classNames="items-center justify-center text-lg"
              >
                Create Order
              </TextBox>
            )***REMOVED***
          </Button>
        </View>
      )***REMOVED***
    </View>
  );
***REMOVED***

export default Cart;
