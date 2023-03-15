import { Text ***REMOVED*** from "native-base";
import React from "react";

const TextBox = ({ children, semibold, classNames, style ***REMOVED***) => {
  return (
    <Text
      style={{
        fontFamily: semibold ? "Poppins_600SemiBold" : "Poppins_500Medium",
        ...style,
  ***REMOVED******REMOVED***
      className={`${classNames***REMOVED***`***REMOVED***
    >
      {children***REMOVED***
    </Text>
  );
***REMOVED***

export default TextBox;
