import { View, Text, TouchableOpacity ***REMOVED*** from "react-native";
import React from "react";
import ViewBox from "../../components/shared/styles/ViewBox";
import TextBox from "../../components/shared/styles/TextBox";
import { FlatList ***REMOVED*** from "native-base";
import FoodItem from "../../components/foodService/FoodItem";
import { getAllFoodItems ***REMOVED*** from "../../../lib/firebase/FoodService";
import CheckoutModal from "../../components/foodService/CheckoutModal";
import { CartContext ***REMOVED*** from "../../../hooks/context";

const Cantene = (props) => {
  const { cart ***REMOVED*** = React.useContext(CartContext);
  const [showModal, setShowModal] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getAllFoodItems()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
***REMOVED***, []);
  return (
    <ViewBox class="flex-1 bg-white items-center justify-start">
      <View className="flex-row items-center justify-between w-full px-5 border-b-2 mb-2">
        <TextBox class="my-2 text-lg" bold>
          Items
        </TextBox>
        <TouchableOpacity
          className="pt-2 pl-3"
          onPress={() => {
            setShowModal(true);
      ***REMOVED******REMOVED***
        >
          <View className="items-start justify-center px-4 py-2 bg-black rounded-lg">
            <TextBox class="text-white">Checkout</TextBox>
          </View>
          {cart && cart.length ? (
            <View className="mr-6 absolute z-1 bg-white border-2 rounded-full w-7 h-7 items-center justify-center">
              <TextBox class="text-xs">{cart.length***REMOVED***</TextBox>
            </View>
          ) : null***REMOVED***
        </TouchableOpacity>
      </View>
      {data && data.length ? (
        <FlatList
          className="w-full"
          data={data***REMOVED***
          renderItem={({ item, index ***REMOVED***) => (
            <FoodItem item={item***REMOVED*** key={index***REMOVED*** index={index***REMOVED*** />
          )***REMOVED***
          keyExtractor={(item) => item.id***REMOVED***
        />
      ) : (
        <View>
          <TextBox>no items</TextBox>
        </View>
      )***REMOVED***
      <CheckoutModal showModal={showModal***REMOVED*** setShowModal={setShowModal***REMOVED*** />
    </ViewBox>
  );
***REMOVED***

export default Cantene;
