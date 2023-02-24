import { View, Text } from "react-native";
import React from "react";

const TextBox = (props) => {
  return (
    <Text
      style={{
        fontFamily: `${props.bold ? "Lato_700Bold" : "Lato_400Regular"}`,
      }}
      className={`${props.class}`}
    >
      {props.children}
    </Text>
  );
};

export default TextBox;
