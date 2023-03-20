import React from "react";

import { Pressable ***REMOVED*** from "native-base";
import { Entypo ***REMOVED*** from "@expo/vector-icons";
import { View, LayoutAnimation, UIManager ***REMOVED*** from "react-native";

import TextBox from "../TextBox";

UIManager.setLayoutAnimationEnabledExperimental;

const ExpandableView = ({ expanded, item, handleCancelOrderModal ***REMOVED***) => {
  return (
    <View
      className={`${
        expanded !== item.orderId ? "h-0 overflow-hidden" : "overflow-hidden"
  ***REMOVED*** `***REMOVED***
    >
      {item.cart.map((item) => {
        return (
          <View
            className={` flex-row justify-between items-center w-full bg-neutral-700 my-2 rounded-2xl`***REMOVED***
            key={item.id***REMOVED***
          >
            <View className="w-full flex-row justify-between items-center px-5 py-2 rounded-2xl">
              <View className="flex-row items-center ">
                <View className="ml-5">
                  <TextBox semibold classNames="text-white">
                    {item.name***REMOVED***
                  </TextBox>
                  <TextBox semibold classNames="text-white text-sm">
                    ₹ {item.price***REMOVED***
                  </TextBox>
                </View>
              </View>
              <TextBox semibold classNames="text-white">
                {item.qty***REMOVED***
              </TextBox>
            </View>
          </View>
        );
  ***REMOVED***)***REMOVED***
      {!item.is_delivered && (
        <Pressable onPress={handleCancelOrderModal***REMOVED***>
          <View className="mt-2 bg-red-400 rounded-2xl items-center justify-center">
            <TextBox semibold classNames="py-4">
              Cancel Order
            </TextBox>
          </View>
        </Pressable>
      )***REMOVED***
    </View>
  );
***REMOVED***

const OrderItem = ({
  item,
  setIsComponentOpen,
  isComponentOpen,
  cancelOrderModal,
***REMOVED***) => {
  const handleCancelOrderModal = async () => {
    cancelOrderModal(item.orderId);
***REMOVED***;

  return (
    <Pressable
      className="bg-secondary-black  my-2 rounded-2xl p-5 justify-between items-center"
      onPress={() => {
        LayoutAnimation.configureNext({
          ...LayoutAnimation.Presets.easeInEaseOut,
          duration: 100,
        ***REMOVED***
        setIsComponentOpen(
          item.orderId !== isComponentOpen ? item.orderId : false
        );
  ***REMOVED******REMOVED***
    >
      <View className="flex-col w-full justify-between items-center">
        <View className="flex-row w-full justify-between">
          <TextBox semibold classNames="text-[10px] text-[#CCCCCC]">
            #{item.orderId***REMOVED***
          </TextBox>
          <TextBox semibold classNames="text-white">
            {item.timestamp.toDate().toDateString().slice(4)***REMOVED***
          </TextBox>
        </View>
        <View className="flex-row items-center justify-between w-full">
          <View>
            <View className="flex-row">
              <TextBox semibold classNames="text-white mr-5">
                {item.hostel.toUpperCase()***REMOVED***
              </TextBox>
              <TextBox semibold classNames="text-white">
                {item.room_no***REMOVED***
              </TextBox>
            </View>
            <TextBox semibold classNames="text-white">
              ₹{item.total***REMOVED***
            </TextBox>
          </View>
          <View className="items-center justify-center">
            <TextBox
              semibold
              classNames={`${
                item.is_delivered ? "text-green-400" : " text-primary-snackmen"
          ***REMOVED***`***REMOVED***
            >
              {item.is_delivered ? "Delivered" : "In Progress"***REMOVED***
            </TextBox>
          </View>
        </View>
      </View>
      <Entypo
        name="chevron-thin-down"
        size={15***REMOVED***
        color="white"
        style={{
          marginBottom: -12,
          opacity: isComponentOpen !== item.orderId ? 100 : 0,
    ***REMOVED******REMOVED***
      />
      <ExpandableView
        expanded={isComponentOpen***REMOVED***
        item={item***REMOVED***
        handleCancelOrderModal={handleCancelOrderModal***REMOVED***
      />
    </Pressable>
  );
***REMOVED***

export default OrderItem;
