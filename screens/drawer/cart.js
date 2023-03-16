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
      <TextBox
        semibold
        classNames="text-[#353232] text-[110px] w-[200vw] text-center absolute"
        style={{ includeFontPadding: false, lineHeight: 150 ***REMOVED******REMOVED***
      >
        BENTO
      </TextBox>
      <View className="w-full pt-16 flex-row pl-10">
        <TouchableHighlight
          className="bg-[#CCCCCC] items-center justify-center w-10 h-10 rounded-2xl mr-7"
          semibold
          onPress={() => {
            navigation.navigate("Home");
      ***REMOVED******REMOVED***
        >
          <TextBox semibold classNames="text-black text-3xl">
            {"<"***REMOVED***
          </TextBox>
        </TouchableHighlight>
        <TextBox semibold classNames="text-white text-3xl">
          Cart
        </TextBox>
      </View>
      {cartItems.length < 1 && (
        <TextBox semibold classNames="text-white mt-44">
          Nothing to see here!
        </TextBox>
      )***REMOVED***
      <ScrollView className="mt-14 w-full px-5">
        {cartItems.map((item) => {
          return (
            <View
              className="flex-row justify-between items-center w-full my-2 bg-[#353232] p-2 rounded-2xl"
              key={item.id***REMOVED***
            >
              <View className="flex-row items-center ">
                <Image
                  className=" w-14 h-14  rounded-lg"
                  source={{
                    uri: `${item.imgUrl***REMOVED***`,
              ***REMOVED******REMOVED***
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
        <View className="h-[35vh] w-full bg-[#353232] rounded-t-3xl top-auto bottom-0 px-10 pt-2 pb-5 justify-evenly">
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
              <TextBox classNames="text-white text-xl">
                Total
              </TextBox>
              <TextBox semibold classNames="text-white mt-1 ml-1">
                (₹5 Delivery)
              </TextBox>
            </View>
            <TextBox semibold classNames="text-white text-xl">
              ₹ {total***REMOVED***
            </TextBox>
          </View>
          <Button disabled={disabled***REMOVED*** onPress={handleCreateOrder***REMOVED***>
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
