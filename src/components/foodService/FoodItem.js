import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ViewBox from "../shared/styles/ViewBox";
import { Image } from "react-native";
import TextBox from "../shared/styles/TextBox";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CartContext } from "../../../hooks/context";
import { Entypo } from "@expo/vector-icons";

const FoodItem = ({ item, index }) => {
  const [count, setCount] = React.useState(0);
  const {
    addItemToCart,
    removeItemFromCart,
    getCartDetail,
    cart,
    getItemCount,
  } = React.useContext(CartContext);

  React.useEffect(() => {
    setCount(getItemCount(index));
    console.log(cart);
  }, [cart]);
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
        {count == 0 ? (
          <TouchableOpacity onPress={() => addItemToCart(index)}>
            <View className="mx-4 py-2 px-8 bg-primary-purple rounded-lg border-2 border-black ">
              <TextBox bold class="text-white">
                add
              </TextBox>
            </View>
          </TouchableOpacity>
        ) : (
          <View className="mx-4 py-2 px-3 bg-primary-purple rounded-lg border-2 border-black flex-row items-center justify-center">
            <TouchableOpacity onPress={() => removeItemFromCart(index)}>
              <TextBox class="text-black bg-white p-1 mr-2 rounded-lg">
                <Entypo name="minus" size={10} color="black" />
              </TextBox>
            </TouchableOpacity>
            <TextBox class="text-white">{getItemCount(index)}</TextBox>
            <TouchableOpacity onPress={() => addItemToCart(index)}>
              <TextBox class="text-black p-1 ml-2 bg-white rounded-lg">
                <Entypo name="plus" size={10} color="black" />
              </TextBox>
            </TouchableOpacity>
          </View>
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
