import React from "react";
import { Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import { CartContext } from "../../lib/context/cartContext";
import TextBox from "../TextBox";
import { Pressable } from "react-native";

const FoodItem = ({ item, index }) => {
  const { value } = React.useContext(CartContext);
  const { cartState, cartDispatch } = value;

  
  return (
    <View
      className="flex-row  items-center justify-between px-10 pt-2 pb-5 bg-[#353232] m-2 rounded-2xl"
      key={index}
    >
      <View>
        <TextBox semibold    classNames="text-white text-xl">
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </TextBox>
        <TextBox semibold    classNames="text-white text-xl">{item.price} ₹</TextBox>
      </View>
      <View className="items-center justify-end flex-col py-6">
        <Image
          className=" w-32 h-32  rounded-lg"
          source={{
            uri: `${item.imgUrl}`,
          }}
          resizeMode="contain"
        />
        {!cartState.cart[item.id] ? (
          <Pressable
            className="absolute bg-[#FFA410] rounded-2xl flex-row w-28 h-12 items-center justify-evenly"
            onPress={() => cartDispatch({ type: "ADD_TO_CART", payload: item })}
          >
            <TextBox semibold    bold class="text-black">
              add
            </TextBox>
          </Pressable>
        ) : (
          <View className="absolute bg-[#FFA410] rounded-2xl flex-row w-28 h-12 items-center justify-evenly">
            <Pressable
              onPress={() =>
                cartDispatch({ type: "REDUCE_FROM_CART", payload: item })
              }
            >
              <TextBox semibold    classNames="p-1 rounded-lg bg-black">
                <Entypo name="minus" size={15} color="white" />
              </TextBox>
            </Pressable>
            <TextBox semibold    classNames="text-[#1E1b1b]">
              {cartState.cart[item.id].qty}
            </TextBox>
            <Pressable
              onPress={() =>
                cartDispatch({ type: "ADD_TO_CART", payload: item })
              }
            >
              <TextBox semibold    classNames="p-1 rounded-lg bg-black">
                <Entypo name="plus" size={15} color="white" />
              </TextBox>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default FoodItem;
