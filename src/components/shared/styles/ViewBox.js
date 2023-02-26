import { View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const ViewBox = (props) => {
  return (
    <View
      style={{ elevation: 10, borderWidth:StyleSheet.hairlineWidth, borderColor:'#D9D9D9' }}
      className={`items-center justify-center bg-white rounded-lg ${props.class}`}
    >
      {props.children}
    </View>
  );
};

export default ViewBox;
