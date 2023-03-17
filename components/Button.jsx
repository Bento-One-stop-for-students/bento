import { Pressable } from "react-native";
import React from "react";

const Button = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={{ elevation: 3 }}
      disabled={props.disabled}
      className={`rounded-2xl w-full h-[8vh] items-center justify-center bg-primary-snackmen  ${props.classNames}`}
    >
      {props.children}
    </Pressable>
  );
};

export default Button;
