import { Text, TouchableHighlight, View ***REMOVED*** from "react-native";

import React from "react";
import { AuthContext ***REMOVED*** from "../../hooks/context";

const Settings = () => {
  const {signOut***REMOVED*** = React.useContext(AuthContext)
  return (
    <View className="flex-1 flex-row items-center justify-center bg-white">
      <Text className="text-red-800 font-bold">this is settings</Text>
      <TouchableHighlight onPress={signOut***REMOVED***><Text>sign out</Text></TouchableHighlight>
    </View>
  );
***REMOVED***

export default Settings;
