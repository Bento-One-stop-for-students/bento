import { View } from "react-native";
import React from "react";

const ViewBox = (props) => {
  return (
    <View
      style={{ elevation: 20 }}
      className={`items-center justify-center bg-white rounded-lg ${props.class}`}
    >
      {props.children}
    </View>
  );
};

export default ViewBox;
