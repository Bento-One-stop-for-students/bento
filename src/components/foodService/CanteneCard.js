import React from "react";
import { Pressable ***REMOVED*** from "native-base";
import TextBox from "../shared/styles/TextBox";
import ViewBox from "../shared/styles/ViewBox";
import { TouchableOpacity, View ***REMOVED*** from "react-native";

const CanteneCard = (props) => {
  const [isPressed, setIsPressed] = React.useState(false);
  return (
    <ViewBox class="w-[80vw] items-center justify-between p-5 my-4 flex-row">
      <View>
        <TextBox bold class="w-full text-start text-[16px] mb-3">
          {props.title***REMOVED***
        </TextBox>
        <TextBox bold class="w-full text-start text-[16px] mb-3">
          Status :{" "***REMOVED***
          <TextBox class="text-primary-purple" >
            {props.status ? 'Open' : 'Closed'***REMOVED***
          </TextBox>
        </TextBox>
      </View>
      <TouchableOpacity className="h-[10vh] p-2 rounded-xl bg-primary-purple items-center justify-center" onPress={props.onPress***REMOVED***>
        <TextBox class="text-white text-sm">Order Food</TextBox>
      </TouchableOpacity>
    </ViewBox>
  );
***REMOVED***

export default CanteneCard;
