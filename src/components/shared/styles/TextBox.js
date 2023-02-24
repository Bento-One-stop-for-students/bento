import { View, Text ***REMOVED*** from "react-native";
import React from "react";

const TextBox = (props) => {
  return (
    <Text
      style={{
        fontFamily: `${props.bold ? "Lato_700Bold" : "Lato_400Regular"***REMOVED***`,
  ***REMOVED******REMOVED***
      className={`${props.class***REMOVED***`***REMOVED***
    >
      {props.children***REMOVED***
    </Text>
  );
***REMOVED***

export default TextBox;
