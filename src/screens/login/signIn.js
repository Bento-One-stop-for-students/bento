import React from "react";
import { AntDesign ***REMOVED*** from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
***REMOVED*** from "react-native";
import { AuthContext ***REMOVED*** from "../../../hooks/context";


const SignIn = ({ navigation, route ***REMOVED***) => {
  const { signIn ***REMOVED*** = React.useContext(AuthContext);

  return (
    <View className="flex-1 flex-col items-center justify-center bg-white">
      <Text
        className="text-black font-bold text-6xl tracking-[10]"
        style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
      >
        BENTO
      </Text>
      <Text
        className="text-primary-purple"
        style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
      >
        One stop for students
      </Text>
      <View className="mt-10 justify-center items-center ">
        <TouchableOpacity
          className="flex-row rounded-[100px] w-[80vw] bg-primary-purple items-center justify-between h-[6vh] px-[2vw]"
          onPress={signIn***REMOVED***
        >
          <Text
            className="ml-[18vw] text-white"
            style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
          >
            Sign in with Google
          </Text>
          <AntDesign name="google" size={32***REMOVED*** color="white" className="" />
        </TouchableOpacity>
      </View>
      <View className="flex-row mt-1 items-center justify-center">
        <Text className="text-xs">Don't have an Account?</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('sign-up');
      ***REMOVED******REMOVED***
        >
          <Text className="text-xs text-primary-purple "> Sign Up here</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
***REMOVED***

export default SignIn;
