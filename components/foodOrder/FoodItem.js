import React from "react";
import { Image ***REMOVED*** from "react-native";
import { Entypo ***REMOVED*** from "@expo/vector-icons";
import { View, StyleSheet ***REMOVED*** from "react-native";
import { CartContext ***REMOVED*** from "../../lib/context/cartContext";
import TextBox from "../TextBox";
import { Pressable ***REMOVED*** from "react-native";

const FoodItem = ({ item, index ***REMOVED***) => {
  const { value ***REMOVED*** = React.useContext(CartContext);
  const { cartState, cartDispatch ***REMOVED*** = value;

  
  return (
    <View
      className="flex-row  items-center justify-between px-10 pt-2 pb-5 bg-[#353232] m-2 rounded-2xl"
      key={index***REMOVED***
    >
      <View>
        <TextBox semibold    classNames="text-white text-xl">
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)***REMOVED***
        </TextBox>
        <TextBox semibold    classNames="text-white text-xl">{item.price***REMOVED*** ₹</TextBox>
      </View>
      <View className="items-center justify-end flex-col py-6">
        <Image
          className=" w-32 h-32  rounded-lg"
          source={{
            uri: `${item.imgUrl***REMOVED***`,
      ***REMOVED******REMOVED***
          resizeMode="contain"
        />
        {!cartState.cart[item.id] ? (
          <Pressable
            className="absolute bg-[#FFA410] rounded-2xl flex-row w-28 h-12 items-center justify-evenly"
            onPress={() => cartDispatch({ type: "ADD_TO_CART", payload: item ***REMOVED***)***REMOVED***
          >
            <TextBox semibold    bold class="text-black">
              add
            </TextBox>
          </Pressable>
        ) : (
          <View className="absolute bg-[#FFA410] rounded-2xl flex-row w-28 h-12 items-center justify-evenly">
            <Pressable
              onPress={() =>
                cartDispatch({ type: "REDUCE_FROM_CART", payload: item ***REMOVED***)
          ***REMOVED***
            >
              <TextBox semibold    classNames="p-1 rounded-lg bg-black">
                <Entypo name="minus" size={15***REMOVED*** color="white" />
              </TextBox>
            </Pressable>
            <TextBox semibold    classNames="text-[#1E1b1b]">
              {cartState.cart[item.id].qty***REMOVED***
            </TextBox>
            <Pressable
              onPress={() =>
                cartDispatch({ type: "ADD_TO_CART", payload: item ***REMOVED***)
          ***REMOVED***
            >
              <TextBox semibold    classNames="p-1 rounded-lg bg-black">
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
