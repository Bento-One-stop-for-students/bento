import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import TextBox from "../TextBox";
import { Pressable } from "react-native";
import Button from "../Button";

const SnackMen = ({ navigation, snackmenStatus }) => {
  return (
    <View
      className={`${
        snackmenStatus == "OPEN" ? "bg-[#FFA410]" : "bg-[#CCC]"
      } w-[92vw] h-[34vh] rounded-3xl mt-3 p-5 flex-col justify-between`}
    >
      <Image
        source={require("../../assets/images/donut.png")}
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
          }`}
        >
          <TextBox semibold classNames="text-white">
            {snackmenStatus}
          </TextBox>
        </View>
      </View>
      <Pressable
        className="w-full h-16 border border-1 rounded-2xl items-center justify-center bg-[#FFA410]"
        onPress={() => {
          navigation.navigate("Your Orders");
        }}
      >
        <TextBox semibold classNames="text-[15px]">
          View Orders
        </TextBox>
      </Pressable>
      {snackmenStatus == "OPEN" ? (
        <Button
          classNames=" bg-[#1E1B1B]"
          onPress={() => {
            navigation.navigate("Food Order");
          }}
        >
          <TextBox semibold classNames=" text-white">
            Order Now
          </TextBox>
        </Button>
      ) : (
        <View className="w-full items-center justify-center border-[1px] rounded-2xl">
          <TextBox semibold classNames="text-3xl" style={{ lineHeight: 70 }}>
            Closed
          </TextBox>
        </View>
      )}
    </View>
  );
};

export default SnackMen;
