import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
***REMOVED*** from "react-native";
import React, { useEffect, useState ***REMOVED*** from "react";
import { AntDesign ***REMOVED*** from "@expo/vector-icons";
import { AuthContext ***REMOVED*** from "../../../hooks/context";

const SignUp = ({ navigation, route ***REMOVED***) => {
  const { signIn ***REMOVED*** = React.useContext(AuthContext);

  return (
    <View className="flex-1 flex-col items-center justify-center bg-white">
      <Text
        className="text-black font-bold text-3xl "
        style={{ fontFamily: "Lato_400Regular" ***REMOVED******REMOVED***
      >
        Welcome to Bento!
      </Text>
      <Text
        className="text-primary-purple"
        style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
      >
        Let's get you started
      </Text>
      <View className="mt-7 justify-center items-center ">
        <Text
          className="text-primary-purple text-xs "
          style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
        >
          Use Institute e-mail
        </Text>
        <TouchableOpacity
          className="flex-row rounded-[100px] w-[80vw] bg-primary-purple items-center justify-between h-[6vh] px-[2vw]"
          onPress={signIn***REMOVED***
        >
          <Text
            className="ml-[18vw] text-white"
            style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
          >
            Sign up with Google
          </Text>
          <AntDesign name="google" size={32***REMOVED*** color="white" className="" />
        </TouchableOpacity>
      </View>
      <View className="flex-row mt-1 items-center justify-center">
        <Text className="text-xs">Already have an Account?</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("sign-in");
      ***REMOVED******REMOVED***
        >
          <Text className="text-xs text-primary-purple "> Sign in</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
***REMOVED***

export default SignUp;
