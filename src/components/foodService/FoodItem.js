import { View, Text, StyleSheet ***REMOVED*** from "react-native";
import React from "react";
import ViewBox from "../shared/styles/ViewBox";
import { Image ***REMOVED*** from "react-native";
import TextBox from "../shared/styles/TextBox";
import { TouchableOpacity ***REMOVED*** from "react-native-gesture-handler";
import { CartContext ***REMOVED*** from "../../../hooks/context";
import { Entypo ***REMOVED*** from "@expo/vector-icons";

const FoodItem = ({ item, index ***REMOVED***) => {
  const [count, setCount] = React.useState(0);
  const {
    addItemToCart,
    removeItemFromCart,
    getCartDetail,
    cart,
    getItemCount,
***REMOVED*** = React.useContext(CartContext);

  React.useEffect(() => {
    console.log(item)
    setCount(getItemCount(item.id));
    console.log(cart);
***REMOVED***, [cart]);
  return (
    <View
      className="flex-row w-full  items-center justify-between p-2 px-5"
      key={index***REMOVED***
      style={{ borderBottomWidth: StyleSheet.hairlineWidth ***REMOVED******REMOVED***
    >
      <View>
        <TextBox bold>
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)***REMOVED***
        </TextBox>
        <Text>{item.price***REMOVED*** Rs</Text>
      </View>
      <View className="items-center justify-center flex-row">
        {count == 0 ? (
          <TouchableOpacity
            onPress={() => addItemToCart({ id: item.id, ...item ***REMOVED***)***REMOVED***
          >
            <View className="mx-4 py-2 px-8 bg-primary-purple rounded-lg border-2 border-black ">
              <TextBox bold class="text-white">
                add
              </TextBox>
            </View>
          </TouchableOpacity>
        ) : (
          <View className="mx-4 py-2 px-3 bg-primary-purple rounded-lg border-2 border-black flex-row items-center justify-center">
            <TouchableOpacity onPress={() => removeItemFromCart(item.id)***REMOVED***>
              <TextBox class="text-black bg-white p-1 mr-2 rounded-lg">
                <Entypo name="minus" size={10***REMOVED*** color="black" />
              </TextBox>
            </TouchableOpacity>
            <TextBox class="text-white">{getItemCount(item.id)***REMOVED***</TextBox>
            <TouchableOpacity
              onPress={() => addItemToCart({ id: item.id, ...item ***REMOVED***)***REMOVED***
            >
              <TextBox class="text-black p-1 ml-2 bg-white rounded-lg">
                <Entypo name="plus" size={10***REMOVED*** color="black" />
              </TextBox>
            </TouchableOpacity>
          </View>
        )***REMOVED***
        <Image
          className="relative w-[30vw] h-[10vh]  rounded-lg"
          source={{
            uri: `${item.imgUrl***REMOVED***`,
      ***REMOVED******REMOVED***
          resizeMode="contain"
        />
      </View>
    </View>
  );
***REMOVED***

export default FoodItem;
