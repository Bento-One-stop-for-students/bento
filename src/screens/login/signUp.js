import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../../../hooks/context";

const SignUp = ({ navigation, route }) => {
  const { signIn } = React.useContext(AuthContext);

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
      <View className="mt-7 justify-center items-center ">
        <Text
          className="text-primary-purple text-xs "
          style={{ fontFamily: "Lato_700Bold" }}
        >
          Use Institute e-mail
        </Text>
        <TouchableOpacity
          className="flex-row rounded-[100px] w-[80vw] bg-primary-purple items-center justify-between h-[6vh] px-[2vw]"
          onPress={signIn}
        >
          <Text
            className="ml-[18vw] text-white"
            style={{ fontFamily: "Lato_700Bold" }}
          >
            Sign up with Google
          </Text>
          <AntDesign name="google" size={32} color="white" className="" />
        </TouchableOpacity>
      </View>
      <View className="flex-row mt-1 items-center justify-center">
        <Text className="text-xs">Already have an Account?</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("sign-in");
          }}
        >
          <Text className="text-xs text-primary-purple "> Sign in</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default SignUp;
