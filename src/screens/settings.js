import { Text, TouchableHighlight, View } from "react-native";

import React from "react";
import { AuthContext } from "../../hooks/context";

const Settings = () => {
  const {signOut} = React.useContext(AuthContext)
  return (
    <View className="flex-1 flex-row items-center justify-center bg-white">
      <Text className="text-red-800 font-bold">this is settings</Text>
      <TouchableHighlight onPress={signOut}><Text>sign out</Text></TouchableHighlight>
    </View>
  );
};

export default Settings;
