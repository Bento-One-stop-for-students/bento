import React from "react";

import { View ***REMOVED*** from "react-native";
import { Feather ***REMOVED*** from "@expo/vector-icons";

import TextBox from "../components/TextBox";
import { getAllFoodItems ***REMOVED*** from "../lib/firebase/food-order";
import { CartContext ***REMOVED*** from "../lib/context/cartContext";
import { Pressable ***REMOVED*** from "native-base";
import { FlatList ***REMOVED*** from "react-native";
import FoodItem from "../components/foodOrder/FoodItem";
import Button from "../components/Button";

const FoodOrder = ({ navigation ***REMOVED***) => {
  const { value ***REMOVED*** = React.useContext(CartContext);
  const { cartState ***REMOVED*** = value;
  var size = Object.keys(cartState.cart).length;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getAllFoodItems()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
***REMOVED***, []);
  return (
    <View className="flex-1 items-center">
      <View className="flex-center items-center">
        <TextBox
          semibold
          classNames="text-primary-black text-[100px]  w-[110vw] text-center"
          style={{
            includeFontPadding: false,
            paddingTop: 100,
            fontFamily: "Poppins_700Bold",
      ***REMOVED******REMOVED***
        >
          BENTO
        </TextBox>
        <View className="flex-row items-center justify-around w-full h-full absolute">
          <TextBox
            semibold
            classNames="text-white text-3xl items-center justify-center"
          >
            Food Order
          </TextBox>
          <Pressable
            className=" pl-4 pt-3 pb-3 "
            onPress={() => {
              navigation.navigate("Cart");
        ***REMOVED******REMOVED***
          >
            <Feather
              name="shopping-cart"
              style={{ transform: [{ rotateY: "180deg" ***REMOVED***] ***REMOVED******REMOVED***
              size={35***REMOVED***
              color="white"
            />
            <TextBox
              semibold
              classNames="text-primary-snackmen text-md bg-[#1E1b1b] px-2 pt-1 rounded-full absolute"
            >
              {size***REMOVED***
            </TextBox>
          </Pressable>
        </View>
      </View>
      {data && data.length ? (
        <>
          <TextBox classNames="text-primary-closed text-[9px]">
            All availaible quantities are realtime
          </TextBox>
          <FlatList
            className="w-full"
            contentContainerStyle={{ paddingBottom: 200 ***REMOVED******REMOVED***
            data={data***REMOVED***
            renderItem={({ item, index ***REMOVED***) => (
              <FoodItem item={item***REMOVED*** key={index***REMOVED*** index={index***REMOVED*** />
            )***REMOVED***
            keyExtractor={(item) => item.id***REMOVED***
          />
        </>
      ) : (
        <View>
          <TextBox semibold classNames="text-white mt-10">
            Loading ...
          </TextBox>
        </View>
      )***REMOVED***
      {size > 0 && (
        <View className="top-auto bottom-0 absolute items-center justify-center w-full p-5">
          <Button
            onPress={() => {
              navigation.navigate("Cart");
        ***REMOVED******REMOVED***
          >
            <TextBox semibold classNames="text-black text-lg">
              Checkout
            </TextBox>
          </Button>
        </View>
      )***REMOVED***
    </View>
  );
***REMOVED***

export default FoodOrder;
