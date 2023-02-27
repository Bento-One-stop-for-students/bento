import React from "react";
import { Pressable } from "native-base";
import TextBox from "../shared/styles/TextBox";
import ViewBox from "../shared/styles/ViewBox";
import { TouchableOpacity, View } from "react-native";

const CanteneCard = (props) => {
  const [isPressed, setIsPressed] = React.useState(false);
  return (
    <ViewBox class="w-[80vw] items-center justify-between p-5 my-4 flex-row">
      <View>
        <TextBox bold class="w-full text-start text-[16px] mb-3">
          {props.title}
        </TextBox>
        <TextBox bold class="w-full text-start text-[16px] mb-3">
          Status :{" "}
          <TextBox class="text-primary-purple" >
            {props.status ? 'Open' : 'Closed'}
          </TextBox>
        </TextBox>
      </View>
      <TouchableOpacity className="h-[10vh] p-2 rounded-xl bg-primary-purple items-center justify-center" onPress={props.onPress}>
        <TextBox class="text-white text-sm">Order Food</TextBox>
      </TouchableOpacity>
    </ViewBox>
  );
};

export default CanteneCard;