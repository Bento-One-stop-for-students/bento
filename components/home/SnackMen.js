import { View, Text ***REMOVED*** from "react-native";
import React from "react";
import { Image ***REMOVED*** from "react-native";
import TextBox from "../TextBox";
import { Pressable ***REMOVED*** from "react-native";

const SnackMen = ({ navigation, snackmenStatus ***REMOVED***) => {
  return (
    <View
      className={`${
        snackmenStatus == "OPEN" ? "bg-[#FFA410]" : "bg-[#CCC]"
  ***REMOVED*** w-[92vw] h-[34vh] rounded-3xl mt-3 p-5 flex-col justify-between`***REMOVED***
    >
      <Image
        source={require("../../assets/images/donut.png")***REMOVED***
        className="absolute h-full w-full opacity-80 mt-5"
        resizeMode="contain"
      />
      <View className="flex-row justify-between">
        <TextBox semibold classNames="text-3xl">
          Snackmen
        </TextBox>
        <View
          className={`w-24 h-12 rounded-2xl items-center justify-center ${
            snackmenStatus == "OPEN"
              ? snackmenStatus == "BREAK"
                ? "bg-orange-500"
                : "bg-green-500"
              : "bg-red-600"
      ***REMOVED***`***REMOVED***
        >
          <TextBox semibold classNames="text-white">
            {snackmenStatus***REMOVED***
          </TextBox>
        </View>
      </View>
      <Pressable
        className="w-full h-16 border border-1 rounded-2xl items-center justify-center bg-[#FFA410]"
        onPress={() => {
          navigation.navigate("Your Orders");
    ***REMOVED******REMOVED***
      >
        <TextBox semibold classNames="text-[15px]">
          View Orders
        </TextBox>
      </Pressable>
      <Button
        classNames=" bg-[#1E1B1B]"
        onPress={() => {
          navigation.navigate("Food Order");
    ***REMOVED******REMOVED***
      >
        <TextBox semibold classNames=" text-white">
          Order Now
        </TextBox>
      </Button>
    </View>
  );
***REMOVED***

export default SnackMen;
