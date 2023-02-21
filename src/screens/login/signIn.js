import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { AuthContext } from "../../../hooks/context";


const SignIn = ({ navigation, route }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <View className="flex-1 flex-col items-center justify-center bg-white">
      <Text
        className="text-black font-bold text-6xl tracking-[10]"
        style={{ fontFamily: "Lato_700Bold" }}
      >
        BENTO
      </Text>
      <Text
        className="text-primary-purple"
        style={{ fontFamily: "Lato_700Bold" }}
      >
        One stop for students
      </Text>
      <View className="mt-10 justify-center items-center ">
        <TouchableOpacity
          className="flex-row rounded-[100px] w-[80vw] bg-primary-purple items-center justify-between h-[6vh] px-[2vw]"
          onPress={signIn}
        >
          <Text
            className="ml-[18vw] text-white"
            style={{ fontFamily: "Lato_700Bold" }}
          >
            Sign in with Google
          </Text>
          <AntDesign name="google" size={32} color="white" className="" />
        </TouchableOpacity>
      </View>
      <View className="flex-row mt-1 items-center justify-center">
        <Text className="text-xs">Don't have an Account?</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('sign-up');
          }}
        >
          <Text className="text-xs text-primary-purple "> Sign Up here</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default SignIn;
