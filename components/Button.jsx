import React from "react";

import { Pressable ***REMOVED*** from "react-native";

const Button = (props) => {
  return (
    <Pressable
      onPress={props.onPress***REMOVED***
      style={{ elevation: 3 ***REMOVED******REMOVED***
      disabled={props.disabled***REMOVED***
      className={`rounded-2xl w-full h-[8vh] items-center justify-center bg-primary-snackmen  ${props.classNames***REMOVED***`***REMOVED***
    >
      {props.children***REMOVED***
    </Pressable>
  );
***REMOVED***

export default Button;
