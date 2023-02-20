import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Auth from "../../../hooks/auth";

const SignIn = () => {
  const { user, isValid, onGoogleButtonPress } = Auth();

  return (
    <View className="flex-1 flex-col items-center justify-center bg-white">
      <Text
        className="text-black font-bold text-3xl "
        style={{ fontFamily: "Lato_400Regular" }}
      >
        Welcome to Bento!
      </Text>
      <Text
        className="text-primary-purple"
        style={{ fontFamily: "Lato_700Bold" }}
      >
        Let's get you started
      </Text>

      <TouchableOpacity
        className="mt-14 flex-row rounded-[100px] w-[80vw] bg-primary-purple items-center justify-between h-[6vh] px-[2vw]"
        onPress={onGoogleButtonPress}
      >
        <Text
          className="ml-[18vw] text-white"
          style={{ fontFamily: "Lato_700Bold" }}
        >
          Sign Up with Google
        </Text>
        <AntDesign name="google" size={32} color="white" className="" />
      </TouchableOpacity>
      <View className="flex-row mt-[1vh]">
        <Text className="text-xs">Already have an Account?</Text>
        <Text className="text-xs text-primary-purple"> Sign in here</Text>
      </View>
    </View>
  );
};

export default SignIn;