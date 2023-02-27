import React from "react";
import { Input } from "native-base";

const InputField = (props) => {
  return (
    <Input
      size="md"
      placeholder={props.placeholder}
      keyboardType="name-phone-pad"
      w={props.width ? props.width : 270}
      marginY={3}
      borderColor={"#D9D9D9"}
      borderRadius={7}
      height={50}
      placeholderTextColor={"#72777A"}
      onChangeText={(text) => props.setValue(text)}
      fontFamily={"Lato_700Bold"}
      style={props.style}
    />
  );
};

export default InputField;