import { Text, TouchableOpacity ***REMOVED*** from "react-native";
import React from "react";

const Button = (props) => {
  return (
    <TouchableOpacity
      className={`h-[7vh] rounded-[200px] ${
        props.disabled ? "bg-gray-500" : " bg-primary-purple"
  ***REMOVED*** justify-center items-center w-[85vw] ${props.class***REMOVED***`***REMOVED***
      onPress={props.onPress***REMOVED***
      disabled={props.disabled***REMOVED***
    >
      <Text className="text-white" style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***>
        {props.text***REMOVED***
      </Text>
    </TouchableOpacity>
  );
***REMOVED***

export default Button;
