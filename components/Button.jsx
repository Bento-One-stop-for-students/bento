import { View, TouchableHighlight ***REMOVED*** from "react-native";
import React from "react";
import TextBox from "./TextBox";

const Button = (props) => {
  return (
    <TouchableHighlight
      onPress={props.onPress***REMOVED***
      style={{ elevation: 3 ***REMOVED******REMOVED***
      disabled={props.disabled***REMOVED***
      className={`rounded-2xl w-full h-[8vh] items-center justify-center bg-[#FFA410] ${props.classNames***REMOVED***`***REMOVED***
    >
      {props.children***REMOVED***
    </TouchableHighlight>
  );
***REMOVED***

export default Button;
