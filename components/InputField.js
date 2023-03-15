import React from "react";
import { Input ***REMOVED*** from "native-base";

const InputField = (props) => {
  const handleChange = (text) => props.onValueChange(text.trim());
  return (
    <Input
      size="lg"
      w="100%"
      fontFamily="Poppins_500Medium"
      placeholder={props.placeholder***REMOVED***
      borderRadius={15***REMOVED***
      isInvalid={props.isInvalid***REMOVED***
      value={props.value***REMOVED***
      onChangeText={handleChange***REMOVED***
      autoCapitalize="none"
      keyboardType={props.numeric ? "numeric" : "name-phone-pad"***REMOVED***
      type={props.password ? "password" : "text"***REMOVED***
      backgroundColor={"white"***REMOVED***
      style={{
        backgroundColor: "white",
        marginTop:10,
        marginBottom:0,
  ***REMOVED******REMOVED***
    />
  );
***REMOVED***

export default InputField;
