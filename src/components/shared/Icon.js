import { View, Text, TouchableOpacity, TouchableHighlight, TouchableOpacityComponent, Touchable ***REMOVED*** from "react-native";
import React from "react";

const Icon = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <View
          className="h-20 rounded-xl bg-white m-2 w-20 items-center justify-center"
          style={{ elevation: 10 ***REMOVED******REMOVED***
        >
          {props.icon***REMOVED***
        </View>
        <Text className="text-center mt-2 font-bold">{props.name***REMOVED***</Text>
      </View>
    </TouchableOpacity>
  );
***REMOVED***

export default Icon;
