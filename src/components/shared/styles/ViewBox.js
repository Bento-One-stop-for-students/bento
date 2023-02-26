import { View ***REMOVED*** from "react-native";
import React from "react";
import { StyleSheet ***REMOVED*** from "react-native";

const ViewBox = (props) => {
  return (
    <View
      style={{ elevation: 10, borderWidth:StyleSheet.hairlineWidth, borderColor:'#D9D9D9' ***REMOVED******REMOVED***
      className={`items-center justify-center bg-white rounded-lg ${props.class***REMOVED***`***REMOVED***
    >
      {props.children***REMOVED***
    </View>
  );
***REMOVED***

export default ViewBox;
