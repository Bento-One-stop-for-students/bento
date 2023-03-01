import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ViewBox from "../shared/styles/ViewBox";
import { Image } from "react-native";
import TextBox from "../shared/styles/TextBox";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CartContext } from "../../../hooks/cart";
import { Entypo } from "@expo/vector-icons";

const FoodItem = ({ item, index }) => {
  const { state, dispatch } = React.useContext(CartContext);

  React.useEffect(() => {
    console.log(state);
    console.log(Object.keys(state.cart).length);
  }, [state]);
  return (
    <View
      className="flex-row w-full  items-center justify-between p-2 px-5"
      key={index}
      style={{ borderBottomWidth: StyleSheet.hairlineWidth }}
    >
      <View>
        <TextBox bold>
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </TextBox>
        <Text>{item.price} Rs</Text>
      </View>
      <View className="items-center justify-center flex-row">
        {state.cart[item.id] ? (
          <View className="mx-4 py-2 px-3 bg-primary-purple rounded-lg border-2 border-black flex-row items-center justify-center">
            <TouchableOpacity
              onPress={() =>
                dispatch({ type: "REDUCE_FROM_CART", payload: item })
              }
            >
              <TextBox class="text-black bg-white p-1 mr-2 rounded-lg">
                <Entypo name="minus" size={10} color="black" />
              </TextBox>
            </TouchableOpacity>
            <TextBox class="text-white">{state.cart[item.id].qty}</TextBox>
            <TouchableOpacity
              onPress={() => dispatch({ type: "ADD_TO_CART", payload: item })}
            >
              <TextBox class="text-black p-1 ml-2 bg-white rounded-lg">
                <Entypo name="plus" size={10} color="black" />
              </TextBox>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => dispatch({ type: "ADD_TO_CART", payload: item })}
          >
            <View className="mx-4 py-2 px-8 bg-primary-purple rounded-lg border-2 border-black ">
              <TextBox bold class="text-white">
                add
              </TextBox>
            </View>
          </TouchableOpacity>
        )}
        <Image
          className="relative w-[30vw] h-[10vh]  rounded-lg"
          source={{
            uri: `${item.imgUrl}`,
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default FoodItem;
