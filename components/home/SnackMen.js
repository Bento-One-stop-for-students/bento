import React from "react";

import { View, Image, Pressable } from "react-native";

import Button from "../Button";
import TextBox from "../TextBox";
import { AuthContext } from "../../lib/context/authContext";

const SnackMen = ({ navigation, snackmenStatus }) => {
  const { authState } = React.useContext(AuthContext);
  return (
    <View
      className={`${
        snackmenStatus == "OPEN" &&
        authState.user.hostel &&
        authState.user.hostel.includes("MBH")
          ? "bg-primary-snackmen"
          : "bg-primary-closed"
      } w-[92vw] h-[34vh] rounded-3xl mt-3 p-5 flex-col justify-between`}
    >
      <Image
        source={require("../../assets/images/donut.png")}
        className="absolute h-full w-full opacity-80 mt-5"
        resizeMode="contain"
      />
      <View className="flex-row justify-between">
        <TextBox semibold classNames="text-3xl ">
          Snackmen
        </TextBox>
        <View
          className={`w-8 h-8 rounded-full border items-center justify-center ${
            snackmenStatus == "OPEN"
              ? snackmenStatus == "BREAK"
                ? "bg-orange-500"
                : "bg-green-500"
              : "bg-red-600"
          }`}
        ></View>
      </View>
      {authState.user.hostel && authState.user.hostel.includes("MBH") ? (
        <>
          <Pressable
            className="w-full h-16 border border-1 rounded-2xl items-center justify-center bg-primary-snackmen"
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
              classNames=" bg-primary-black"
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
              <TextBox
                semibold
                classNames="text-3xl"
                style={{ lineHeight: 70 }}
              >
                Closed
              </TextBox>
            </View>
          )}
        </>
      ) : (
        <View className="w-full items-center justify-center border rounded-xl p-2">
          <TextBox semibold>Snackmen is only availaible in MBH</TextBox>
          <TextBox semibold>We are sorry for the inconvenience.</TextBox>
        </View>
      )}
    </View>
  );
};

export default SnackMen;
