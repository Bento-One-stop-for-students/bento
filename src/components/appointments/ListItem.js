import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import ViewBox from "../shared/styles/ViewBox";
import TextBox from "../shared/styles/TextBox";
import { PanGestureHandler } from "react-native-gesture-handler";
import SwipeableItem, {
  useSwipeableItemParams,
} from "react-native-swipeable-item";
import { deleteBarberAppointment } from "../../../lib/firebase/Barber";
import { AntDesign } from "@expo/vector-icons";

const ListItem = ({ index, user }) => {
  const firstName =
    user.name.split(" ")[0].charAt(0) +
    user.name.split(" ")[0].slice(1).toLowerCase();

  const lastName =
    user.name.split(" ")[1].charAt(0) +
    user.name.split(" ")[1].slice(1).toLowerCase();

  return (
    <SwipeableItem
      renderUnderlayLeft={() => (
        <UnderlayLeft
          onPress={async () => {
            await deleteBarberAppointment(user.userId);
          }}
        />
      )}
      snapPointsLeft={[100]}
    >
      <ViewBox class=" flex-row flex-1 items-center justify-center mx-1 my-3 p-4">
        <PanGestureHandler>
          <View className="flex-row w-full ">
            <View className="items-center justify-center border-r">
              <TextBox bold class="mr-2">
                {index + 1}
              </TextBox>
            </View>
            <View className="w-full ml-2">
              <View className="flex-row">
                <TextBox bold>Name : </TextBox>
                <TextBox>{firstName + " " + lastName}</TextBox>
              </View>
              <View className="flex-row">
                <TextBox bold>Hostel : </TextBox>
                <TextBox> {user.hostel.toUpperCase()}</TextBox>
              </View>
              <View className="flex-row">
                <TextBox bold>Services : </TextBox>
                {user.hair && <TextBox>Hair </TextBox>}
                {user.beard && <TextBox> Beard </TextBox>}
                {user.massage && <TextBox> Massage </TextBox>}
              </View>
            </View>
          </View>
        </PanGestureHandler>
      </ViewBox>
    </SwipeableItem>
  );
};

const UnderlayLeft = (props) => {
  const { close } = useSwipeableItemParams();

  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
        close();
      }}
      className="flex-1 flex-row items-center justify-end bg-[#ff0000]  ml-20 my-3 p-4 "
    >
      <AntDesign name="delete" size={40} color="white" />
    </TouchableOpacity>
  );
};

export default ListItem;
