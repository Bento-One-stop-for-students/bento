import { View, Text } from "react-native";
import React from "react";

const Register = ({ navigation, route }) => {
  const name = route.params.user.additionalUserInfo.profile.name;
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text
        className="text-black font-bold text-xl "
        style={{ fontFamily: "Lato_400Regular" }}
      >We need some more details</Text>
    </View>
  );
};

export default Register;
