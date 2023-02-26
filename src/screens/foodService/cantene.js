import { View, Text, TouchableOpacity ***REMOVED*** from "react-native";
import React from "react";
import ViewBox from "../../components/shared/styles/ViewBox";
import TextBox from "../../components/shared/styles/TextBox";
import { FlatList ***REMOVED*** from "native-base";
import FoodItem from "../../components/foodService/FoodItem";
import { getAllFoodItems ***REMOVED*** from "../../../lib/firebase/FoodService";

const DATA = [
  {
    id: 1,
    name: "lays",
    price: 50,
    img: "url",
***REMOVED***,
  {
    id: 2,
    name: "lays",
    price: 50,
    img: "url",
***REMOVED***,
  {
    id: 3,
    name: "lays",
    price: 50,
    img: "url",
***REMOVED***,
  {
    id: 1,
    name: "lays",
    price: 50,
    img: "url",
***REMOVED***,
  {
    id: 2,
    name: "lays",
    price: 50,
    img: "url",
***REMOVED***,
  {
    id: 3,
    name: "lays",
    price: 50,
    img: "url",
***REMOVED***,
  {
    id: 1,
    name: "lays",
    price: 50,
    img: "url",
***REMOVED***,
  {
    id: 2,
    name: "lays",
    price: 50,
    img: "url",
***REMOVED***,
  {
    id: 3,
    name: "lays",
    price: 50,
    img: "url",
***REMOVED***,
  {
    id: 1,
    name: "lays",
    price: 50,
    img: "url",
***REMOVED***,
  {
    id: 2,
    name: "lays",
    price: 50,
    img: "url",
***REMOVED***,
  {
    id: 3,
    name: "lays",
    price: 50,
    img: "url",
***REMOVED***,
  {
    id: 1,
    name: "lays",
    price: 50,
    img: "url",
***REMOVED***,
  {
    id: 2,
    name: "lays",
    price: 50,
    img: "url",
***REMOVED***,
  {
    id: 3,
    name: "lays",
    price: 50,
    img: "url",
***REMOVED***,
];

const Cantene = (props) => {
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
        <TouchableOpacity className="px-5 py-2 bg-black rounded-lg ">
          <TextBox class="text-white">Checkout</TextBox>
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
    </ViewBox>
  );
***REMOVED***

export default Cantene;
