import React from "react";

import { Pressable } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { View, LayoutAnimation, UIManager } from "react-native";

import TextBox from "../TextBox";

UIManager.setLayoutAnimationEnabledExperimental;

const ExpandableView = ({ expanded, item, handleCancelOrderModal }) => {
  return (
    <View
      className={`${
        expanded !== item.orderId ? "h-0 overflow-hidden" : "overflow-hidden"
      } `}
    >
      {item.cart.map((item) => {
        return (
          <View
            className={` flex-row justify-between items-center w-full bg-neutral-700 my-2 rounded-2xl`}
            key={item.id}
          >
            <View className="w-full flex-row justify-between items-center px-5 py-2 rounded-2xl">
              <View className="flex-row items-center ">
                <View className="ml-5">
                  <TextBox semibold classNames="text-white">
                    {item.name}
                  </TextBox>
                  <TextBox semibold classNames="text-white text-sm">
                    ₹ {item.price}
                  </TextBox>
                </View>
              </View>
              <TextBox semibold classNames="text-white">
                {item.qty}
              </TextBox>
            </View>
          </View>
        );
      })}
      {!item.is_delivered && (
        <Pressable onPress={handleCancelOrderModal}>
          <View className="mt-2 bg-red-400 rounded-2xl items-center justify-center">
            <TextBox semibold classNames="py-4">
              Cancel Order
            </TextBox>
          </View>
        </Pressable>
      )}
    </View>
  );
};

const OrderItem = ({
  item,
  setIsComponentOpen,
  isComponentOpen,
  cancelOrderModal,
}) => {
  const handleCancelOrderModal = async () => {
    cancelOrderModal(item.orderId);
  };

  return (
    <Pressable
      className="bg-secondary-black  my-2 rounded-2xl p-5 justify-between items-center"
      onPress={() => {
        LayoutAnimation.configureNext({
          ...LayoutAnimation.Presets.easeInEaseOut,
          duration: 100,
        });
        setIsComponentOpen(
          item.orderId !== isComponentOpen ? item.orderId : false
        );
      }}
    >
      <View className="flex-col w-full justify-between items-center">
        <View className="flex-row w-full justify-between">
          <TextBox semibold classNames="text-[10px] text-[#CCCCCC]">
            #{item.orderId}
          </TextBox>
          <TextBox semibold classNames="text-white">
            {item.timestamp.toDate().toDateString().slice(4)}
          </TextBox>
        </View>
        <View className="flex-row items-center justify-between w-full">
          <View>
            <View className="flex-row">
              <TextBox semibold classNames="text-white mr-5">
                {item.hostel.toUpperCase()}
              </TextBox>
              <TextBox semibold classNames="text-white">
                {item.room_no}
              </TextBox>
            </View>
            <TextBox semibold classNames="text-white">
              ₹{item.total}
            </TextBox>
          </View>
          <View className="items-center justify-center">
            <TextBox
              semibold
              classNames={`${
                item.is_delivered ? "text-green-400" : " text-primary-snackmen"
              }`}
            >
              {item.is_delivered ? "Delivered" : "In Progress"}
            </TextBox>
          </View>
        </View>
      </View>
      {!isComponentOpen && (
        <Entypo
          name="chevron-thin-down"
          size={15}
          color="white"
          style={{ marginBottom: -12 }}
        />
      )}
      <ExpandableView
        expanded={isComponentOpen}
        item={item}
        handleCancelOrderModal={handleCancelOrderModal}
      />
    </Pressable>
  );
};

export default OrderItem;
