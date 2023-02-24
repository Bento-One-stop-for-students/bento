import { View } from "react-native";
import React from "react";
import TextBox from "./TextBox";
import { Switch } from "native-base";

const SwitchBox = (props) => {
  return (
    <View className="w-full flex-row items-center justify-between">
      <TextBox>{props.text}</TextBox>
      <Switch
        onTrackColor="#D9D9D9"
        onThumbColor="#7345F6"
        value={props.value}
        onValueChange={props.onValueChange}
        size="lg"
      />
    </View>
  );
};

export default SwitchBox;
