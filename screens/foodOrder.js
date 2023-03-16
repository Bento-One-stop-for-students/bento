import React from "react";

import { View } from "react-native";
import { Feather } from "@expo/vector-icons";

import TextBox from "../components/TextBox";
import { getAllFoodItems } from "../lib/firebase/food-order";
import { CartContext } from "../lib/context/cartContext";
import { Pressable } from "native-base";
import { FlatList } from "react-native";
import FoodItem from "../components/foodOrder/FoodItem";

const FoodOrder = ({ navigation }) => {
  const { value } = React.useContext(CartContext);
  const { cartState } = value;
  var size = Object.keys(cartState.cart).length;

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getAllFoodItems()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <View className="flex-1 items-center">
      <TextBox
        semibold
        classNames="text-[#353232] text-[110px] w-[200vw] text-center absolute"
        style={{ includeFontPadding: false, lineHeight: 150 }}
      >
        BENTO
      </TextBox>
      <View className="w-full pt-16 flex-row items-center justify-around">
        <TextBox semibold   classNames="text-white text-3xl">
          Food Order
        </TextBox>
        <Pressable
          className=" pl-4 pt-3 "
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <Feather
            name="shopping-cart"
            style={{ transform: [{ rotateY: "180deg" }] }}
            size={35}
            color="white"
          />
          <TextBox
            semibold
            classNames="text-[#FFA410] text-md bg-[#1E1b1b] px-2 pt-1 rounded-full absolute"
          >
            {size}
          </TextBox>
        </Pressable>
      </View>

      {data && data.length ? (
        <FlatList
          className="w-full mt-9"
          contentContainerStyle={{ paddingBottom: 200 }}
          data={data}
          renderItem={({ item, index }) => (
            <FoodItem item={item} key={index} index={index} />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View>
          <TextBox semibold   classNames="text-white mt-10">
            Loading ...
          </TextBox>
        </View>
      )}
      {size > 0 && (
        <View className="top-auto bottom-0 absolute items-center justify-center w-full">
          <Pressable
            className="bg-[#FFA410] py-3 none w-[90vw] rounded-3xl items-center "
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <TextBox semibold classNames="text-black text-lg">Checkout</TextBox>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default FoodOrder;