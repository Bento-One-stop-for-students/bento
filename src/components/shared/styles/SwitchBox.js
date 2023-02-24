import { View ***REMOVED*** from "react-native";
import React from "react";
import TextBox from "./TextBox";
import { Switch ***REMOVED*** from "native-base";

const SwitchBox = (props) => {
  return (
    <View className="w-full flex-row items-center justify-between">
      <TextBox>{props.text***REMOVED***</TextBox>
      <Switch
        onTrackColor="#D9D9D9"
        onThumbColor="#7345F6"
        value={props.value***REMOVED***
        onValueChange={props.onValueChange***REMOVED***
        size="lg"
      />
    </View>
  );
***REMOVED***

export default SwitchBox;
