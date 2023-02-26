import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ViewBox from "../../components/shared/styles/ViewBox";
import TextBox from "../../components/shared/styles/TextBox";
import { FlatList } from "native-base";
import FoodItem from "../../components/foodService/FoodItem";
import { getAllFoodItems } from "../../../lib/firebase/FoodService";

const DATA = [
  {
    id: 1,
    name: "lays",
    price: 50,
    img: "url",
  },
  {
    id: 2,
    name: "lays",
    price: 50,
    img: "url",
  },
  {
    id: 3,
    name: "lays",
    price: 50,
    img: "url",
  },
  {
    id: 1,
    name: "lays",
    price: 50,
    img: "url",
  },
  {
    id: 2,
    name: "lays",
    price: 50,
    img: "url",
  },
  {
    id: 3,
    name: "lays",
    price: 50,
    img: "url",
  },
  {
    id: 1,
    name: "lays",
    price: 50,
    img: "url",
  },
  {
    id: 2,
    name: "lays",
    price: 50,
    img: "url",
  },
  {
    id: 3,
    name: "lays",
    price: 50,
    img: "url",
  },
  {
    id: 1,
    name: "lays",
    price: 50,
    img: "url",
  },
  {
    id: 2,
    name: "lays",
    price: 50,
    img: "url",
  },
  {
    id: 3,
    name: "lays",
    price: 50,
    img: "url",
  },
  {
    id: 1,
    name: "lays",
    price: 50,
    img: "url",
  },
  {
    id: 2,
    name: "lays",
    price: 50,
    img: "url",
  },
  {
    id: 3,
    name: "lays",
    price: 50,
    img: "url",
  },
];

const Cantene = (props) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getAllFoodItems()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);
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
          data={data}
          renderItem={({ item, index }) => (
            <FoodItem item={item} key={index} index={index} />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View>
          <TextBox>no items</TextBox>
        </View>
      )}
    </ViewBox>
  );
};

export default Cantene;
