import React from "react";

import { View, Animated } from "react-native";

import TextBox from "../TextBox";
import { Pressable } from "native-base";

const ExpandableView = ({ expanded, cart, handleCancelOrder }) => {
  const [height] = React.useState(new Animated.Value(0));
  React.useEffect(() => {
    Animated.timing(height, {
      toValue: expanded ? 2000 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [expanded, height]);
  return (
    <Animated.View
      className="bg-[#353232] w-full"
      style={{ maxHeight: height }}
    >
      {cart.map((item) => {
        return (
          <Animated.View
            style={{ maxHeight: height }}
            className="flex-row justify-between items-center w-full bg-neutral-700 my-2 rounded-2xl"
            key={item.id}
          >
            <View className="w-full flex-row justify-between items-center px-5 py-2 rounded-2xl">
              <View className="flex-row items-center ">
                <Animated.Image
                  style={{ maxHeight: height }}
                  className=" w-14 h-14  rounded-lg"
                  source={{
                    uri: `${item.imgUrl}`,
                  }}
                  resizeMode="contain"
                />
                <View className="ml-5">
                  <TextBox semibold   classNames="text-white">
                    {item.name}
                  </TextBox>
                  <TextBox semibold   classNames="text-white text-sm">
                    Rs {item.price}
                  </TextBox>
                </View>
              </View>
              <TextBox semibold   classNames="text-white">
                {item.qty}
              </TextBox>
            </View>
          </Animated.View>
        );
      })}
      <Animated.View style={{ maxHeight: height }}>
        <Pressable onPress={handleCancelOrder}>
          <View className="mt-2 bg-[#CCCCCC] rounded-2xl items-center justify-center">
            <TextBox semibold   classNames="py-4">
              Cancel Order
            </TextBox>
          </View>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
};

const OrderItem = ({
  item,
  setIsComponentOpen,
  isComponentOpen,
  cancelOrder,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleCancelOrder = () => {
    cancelOrder(item.orderId);
  };

  React.useEffect(() => {
    if (isComponentOpen !== item.orderId) {
      setIsExpanded(false);
    }
  }, [isComponentOpen]);

  return (
    <Pressable
      className="bg-[#353232] my-2 rounded-2xl p-5 justify-between items-center"
      onPress={() => {
        setIsExpanded(!isExpanded);
        setIsComponentOpen(item.orderId);
      }}
    >
      <View className="flex-col w-full justify-between items-center">
        <View className="flex-row w-full justify-between">
          <TextBox semibold   classNames="text-[10px] text-[#CCCCCC]">
            #{item.orderId}
          </TextBox>
          <TextBox semibold   classNames="text-white">
            {item.timeStamp.toDate().toDateString().slice(4)}
          </TextBox>
        </View>
        <View className="flex-row items-center justify-between w-full">
          <View>
            <TextBox semibold   classNames="text-white">
              {item.name}
            </TextBox>
            <View className="flex-row">
              <TextBox semibold   classNames="text-white mr-5">
                {item.hostel.toUpperCase()}
              </TextBox>
              <TextBox semibold   classNames="text-white">
                {item.room_no}
              </TextBox>
            </View>
          </View>
          <TextBox
            semibold
            classNames={`${item.is_delivered ? "text-green-400" : " text-yellow-300"}`}
          >
            {item.is_delivered ? "Delivered" : "In Progress"}
          </TextBox>
        </View>
      </View>
      <ExpandableView
        expanded={isExpanded}
        cart={item.cart}
        handleCancelOrder={handleCancelOrder}
      />
    </Pressable>
  );
};

export default OrderItem;
