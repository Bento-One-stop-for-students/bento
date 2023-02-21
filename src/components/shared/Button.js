import { Text, TouchableOpacity ***REMOVED*** from "react-native";
import React from "react";

const Button = (props) => {
  return (
    <TouchableOpacity className="w-80 rounded-[200px] bg-primary-purple justify-center items-center h-12 mt-4" onPress={props.onPress***REMOVED***>
      <Text className="text-white" style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***>
        {props.text***REMOVED***
      </Text>
    </TouchableOpacity>
  );
***REMOVED***

export default Button;
