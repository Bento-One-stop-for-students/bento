import { View, TouchableHighlight } from "react-native";
import React from "react";
import TextBox from "./TextBox";

const Button = (props) => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={{ elevation: 3 }}
      disabled={props.disabled}
      className={`rounded-2xl w-full h-[8vh] items-center justify-center bg-primary-snackmen  ${props.classNames}`}
    >
      {props.children}
    </TouchableHighlight>
  );
};

export default Button;
