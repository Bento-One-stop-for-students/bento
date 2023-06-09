import React from "react";

import { View } from "react-native";

import TextBox from "../TextBox";

const BookingItem = ({ item }) => {
  return (
    <View className="border border-secondary-black  rounded-2xl py-2 px-5 bg-purple-300">
      <TextBox semibold classNames=" text-lg ">Token No : #{item.token_no}</TextBox>
      <View className="flex-row items-center">
        <TextBox semibold classNames="">Queue waiting : </TextBox>
        <TextBox semibold classNames="text-lg">{item.queue_no}</TextBox>
      </View>
    </View>
  );
};

export default BookingItem;
