import React from "react";
import { Input ***REMOVED*** from "native-base";

const InputField = (props) => {
  return (
    <Input
      size="md"
      placeholder={props.placeholder***REMOVED***
      keyboardType="name-phone-pad"
      w={props.width ? props.width : 270***REMOVED***
      marginY={3***REMOVED***
      borderColor={"#D9D9D9"***REMOVED***
      borderRadius={7***REMOVED***
      height={50***REMOVED***
      placeholderTextColor={"#72777A"***REMOVED***
      onChangeText={(text) => props.setValue(text)***REMOVED***
      fontFamily={"Lato_700Bold"***REMOVED***
      style={props.style***REMOVED***
    />
  );
***REMOVED***

export default InputField;
