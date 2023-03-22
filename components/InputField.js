import React from "react";

import { Input } from "native-base";

const InputField = (props) => {
  const handleChange = (text) => props.onValueChange(text.trim());
  return (
    <Input
      size="lg"
      w="100%"
      fontFamily="Poppins_500Medium"
      placeholder={props.placeholder}
      borderRadius={15}
      isInvalid={props.isInvalid}
      value={props.value}
      onChangeText={handleChange}
      autoCapitalize="none"
      keyboardType={props.numeric ? "numeric" : "name-phone-pad"}
      type={props.password ? "password" : "text"}
      backgroundColor={"white"}
      style={{
        backgroundColor: "white",
        marginTop:10,
        marginBottom:0,
      }}
    />
  );
};

export default InputField;
