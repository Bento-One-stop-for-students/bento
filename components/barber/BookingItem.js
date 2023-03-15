import { View ***REMOVED*** from "react-native";
import React from "react";
import TextBox from "../TextBox";

const BookingItem = ({ item ***REMOVED***) => {
  return (
    <View className="border border-[#353232] rounded-2xl py-2 px-5 bg-purple-300">
      <TextBox semibold classNames=" text-lg ">Token No : #{item.token_no***REMOVED***</TextBox>
      <View className="flex-row items-center">
        <TextBox semibold classNames="">Queue waiting : </TextBox>
        <TextBox semibold classNames="text-lg">{item.queue_no***REMOVED***</TextBox>
      </View>
    </View>
  );
***REMOVED***

export default BookingItem;
