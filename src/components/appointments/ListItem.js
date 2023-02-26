import { View, Text, TouchableHighlight, TouchableOpacity ***REMOVED*** from "react-native";
import React from "react";
import ViewBox from "../shared/styles/ViewBox";
import TextBox from "../shared/styles/TextBox";
import { PanGestureHandler ***REMOVED*** from "react-native-gesture-handler";
import SwipeableItem, {
  useSwipeableItemParams,
***REMOVED*** from "react-native-swipeable-item";
import { deleteBarberAppointment ***REMOVED*** from "../../../lib/firebase/Barber";
import { AntDesign ***REMOVED*** from "@expo/vector-icons";

const ListItem = ({ index, user ***REMOVED***) => {
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
      ***REMOVED******REMOVED***
        />
      )***REMOVED***
      snapPointsLeft={[100]***REMOVED***
    >
      <ViewBox class=" flex-row flex-1 items-center justify-center mx-1 my-3 p-4">
        <PanGestureHandler>
          <View className="flex-row w-full ">
            <View className="items-center justify-center border-r">
              <TextBox bold class="mr-2">
                {index + 1***REMOVED***
              </TextBox>
            </View>
            <View className="w-full ml-2">
              <View className="flex-row">
                <TextBox bold>Name : </TextBox>
                <TextBox>{firstName + " " + lastName***REMOVED***</TextBox>
              </View>
              <View className="flex-row">
                <TextBox bold>Hostel : </TextBox>
                <TextBox> {user.hostel.toUpperCase()***REMOVED***</TextBox>
              </View>
              <View className="flex-row">
                <TextBox bold>Services : </TextBox>
                {user.hair && <TextBox>Hair </TextBox>***REMOVED***
                {user.beard && <TextBox> Beard </TextBox>***REMOVED***
                {user.massage && <TextBox> Massage </TextBox>***REMOVED***
              </View>
            </View>
          </View>
        </PanGestureHandler>
      </ViewBox>
    </SwipeableItem>
  );
***REMOVED***

const UnderlayLeft = (props) => {
  const { close ***REMOVED*** = useSwipeableItemParams();

  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
        close();
  ***REMOVED******REMOVED***
      className="flex-1 flex-row items-center justify-end bg-[#ff0000]  ml-20 my-3 p-4 "
    >
      <AntDesign name="delete" size={40***REMOVED*** color="white" />
    </TouchableOpacity>
  );
***REMOVED***

export default ListItem;
