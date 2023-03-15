import { View } from "react-native";
import React from "react";
import TextBox from "../TextBox";

const BookingItem = ({ item }) => {
  return (
    <View className="border border-[#353232] rounded-2xl py-5 px-5 bg-purple-300">
      <TextBox semibold classNames=" text-lg ">Token No : #{item.token_no}</TextBox>
      <View className="flex-row items-center">
        <TextBox semibold classNames="">Queue waiting : </TextBox>
        <TextBox semibold classNames="text-lg">{item.queue_no}</TextBox>
      </View>
    </View>
  );
};

export default BookingItem;
