import { View, Text ***REMOVED*** from "react-native";
import React from "react";

const Register = ({ navigation, route ***REMOVED***) => {
  const name = route.params.user.additionalUserInfo.profile.name;
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text
        className="text-black font-bold text-xl "
        style={{ fontFamily: "Lato_400Regular" ***REMOVED******REMOVED***
      >We need some more details</Text>
    </View>
  );
***REMOVED***

export default Register;
