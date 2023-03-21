import React from "react";

import { Entypo ***REMOVED*** from "@expo/vector-icons";
import { View, Image, Pressable ***REMOVED*** from "react-native";

import TextBox from "../TextBox";
import { CartContext ***REMOVED*** from "../../lib/context/cartContext";

const FoodItem = ({ item, index ***REMOVED***) => {
  const { value ***REMOVED*** = React.useContext(CartContext);
  const { cartState, cartDispatch ***REMOVED*** = value;
  return (
    <View
      className="flex-row  items-center justify-between p-8 py-5 bg-secondary-black m-2 rounded-2xl"
      key={index***REMOVED***
    >
      <View>
        <TextBox classNames="text-white text-lg">
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)***REMOVED***
        </TextBox>
        <TextBox classNames="text-white">₹ {item.price***REMOVED***</TextBox>
        <View className="flex-row bg-primary-black rounded-xl mt-2 items-center justify-center">
          <TextBox classNames="text-white p-2 text-xs">
            Availaible Qty :{" "***REMOVED***
          </TextBox>
          <TextBox
            semibold
            classNames="bg-primary-closed py-2 px-3 rounded-tr-xl rounded-br-xl"
          >
            {item.qty***REMOVED***
          </TextBox>
        </View>
      </View>
      <View className="items-center justify-end flex-col px-3">
        <Image
          className=" w-28 h-28  rounded-lg mb-4"
          source={
            item.img_url
              ? { uri: item.img_url ***REMOVED***
              : require("../../assets/images/no_image.png")
      ***REMOVED***
          resizeMode="contain"
        />
        {!cartState.cart[item.id] ? (
          <Pressable
            className="absolute bg-primary-snackmen  rounded-xl flex-row w-20 h-10 items-center justify-evenly"
            onPress={() => cartDispatch({ type: "ADD_TO_CART", payload: item ***REMOVED***)***REMOVED***
          >
            <TextBox semibold bold class="text-black">
              add
            </TextBox>
          </Pressable>
        ) : (
          <View className="absolute bg-primary-snackmen  rounded-2xl flex-row w-28 h-12 items-center justify-evenly">
            <Pressable
              onPress={() =>
                cartDispatch({ type: "REDUCE_FROM_CART", payload: item ***REMOVED***)
          ***REMOVED***
            >
              <TextBox semibold classNames="p-1 rounded-lg bg-black">
                <Entypo name="minus" size={15***REMOVED*** color="white" />
              </TextBox>
            </Pressable>
            <TextBox semibold classNames="text-[#1E1b1b]">
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
        )***REMOVED***
      </View>
    </View>
  );
***REMOVED***

export default FoodItem;
