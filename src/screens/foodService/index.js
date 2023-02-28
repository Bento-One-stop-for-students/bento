import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ViewBox from "../../components/shared/styles/ViewBox";
import TextBox from "../../components/shared/styles/TextBox";
import { FlatList } from "native-base";
import FoodItem from "../../components/foodService/FoodItem";
import { getAllFoodItems } from "../../../lib/firebase/FoodService";
import CheckoutModal from "../../components/foodService/CheckoutModal";
import { CartContext } from "../../../hooks/context";

const Cantene = (props) => {
  const { cart } = React.useContext(CartContext);
  const [showModal, setShowModal] = React.useState(false);
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
        <TouchableOpacity
          className="pt-2 pl-3"
          onPress={() => {
            setShowModal(true);
          }}
        >
          <View className="items-start justify-center px-4 py-2 bg-black rounded-lg">
            <TextBox class="text-white">Checkout</TextBox>
          </View>
          {cart && cart.length ? (
            <View className="mr-6 absolute z-1 bg-white border-2 rounded-full w-7 h-7 items-center justify-center">
              <TextBox class="text-xs">{cart.length}</TextBox>
            </View>
          ) : null}
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
      <CheckoutModal showModal={showModal} setShowModal={setShowModal} />
    </ViewBox>
  );
};

export default Cantene;
