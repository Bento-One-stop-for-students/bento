import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = (props) => {
  return (
    <TouchableOpacity
      className={`h-[7vh] rounded-[200px] ${
        props.disabled ? "bg-gray-500" : " bg-primary-purple"
      } justify-center items-center w-[85vw] ${props.class}`}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text className="text-white" style={{ fontFamily: "Lato_700Bold" }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
