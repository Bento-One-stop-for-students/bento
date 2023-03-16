import React from "react";

import { Entypo } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
import {
  ActivityIndicator,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import Button from "../../components/Button";
import TextBox from "../../components/TextBox";
import { CartContext } from "../../lib/context/cartContext";
import { AuthContext } from "../../lib/context/authContext";
import { createUserOrder, getUserOrders } from "../../lib/firebase/food-order";

const Cart = ({ navigation }) => {
  const { authDispatch } = React.useContext(AuthContext);
  const { value } = React.useContext(CartContext);
  const { cartState, cartDispatch } = value;
  const { authState } = React.useContext(AuthContext);
  const [total, setTotal] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);

  let cartItems = Object.values(cartState.cart);

  React.useEffect(() => {
    const calculateTotal = (items) => {
      let amount = 0;
      items.forEach((item) => {
        amount += item.price * item.qty;
      });
      setTotal(amount + 5);
    };
    calculateTotal(cartItems);
  }, [cartState]);

  const handleCreateOrder = async () => {
    try {
      setDisabled(true);
      const res = await createUserOrder({
        id: authState.user.id,
        name: authState.user.name,
        hostel: authState.user.hostel,
        room_no: authState.user.room_no,
        mobile_no: authState.user.mobile_no,
        total,
        cart: cartItems,
      });
      const updatedOrders = await getUserOrders(authState.user.id);
      authDispatch({ type: "GET_ORDERS", payload: updatedOrders });
      authDispatch({ type: "NOTIFICATION_TRUE", payload: res });
      cartDispatch({ type: "EMPTY_CART" });
    } catch (err) {
      authDispatch({
        type: "NOTIFICATION_TRUE",
        payload: "Couldn't create order",
      });
      console.log(err);
    } finally {
      setTimeout(() => {
        authDispatch({
          type: "NOTIFICATION_FALSE",
        });
      }, 3000);
      setDisabled(false);
      navigation.navigate("Home");
    }
  };

  return (
    <View className="flex-1 items-center flex-col">
      <TextBox
        semibold
        classNames="text-[#353232] text-[110px] w-[200vw] text-center absolute"
        style={{ includeFontPadding: false, lineHeight: 150 }}
      >
        BENTO
      </TextBox>
      <View className="w-full pt-16 flex-row pl-10">
        <TouchableHighlight
          className="bg-[#CCCCCC] items-center justify-center w-10 h-10 rounded-2xl mr-7"
          semibold
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <TextBox semibold classNames="text-black text-3xl">
            {"<"}
          </TextBox>
        </TouchableHighlight>
        <TextBox semibold classNames="text-white text-3xl">
          Cart
        </TextBox>
      </View>
      {cartItems.length < 1 && (
        <TextBox semibold classNames="text-white mt-44">
          Nothing to see here!
        </TextBox>
      )}
      <ScrollView className="mt-14 w-full px-5">
        {cartItems.map((item) => {
          return (
            <View
              className="flex-row justify-between items-center w-full my-2 bg-[#353232] p-2 rounded-2xl"
              key={item.id}
            >
              <View className="flex-row items-center ">
                <Image
                  className=" w-14 h-14  rounded-lg"
                  source={{
                    uri: `${item.imgUrl}`,
                  }}
                  resizeMode="contain"
                />
                <View>
                  <TextBox semibold classNames="text-white ml-5">
                    {item.name}
                  </TextBox>
                  <TextBox semibold classNames="text-white ml-5">
                    ₹ {item.price}
                  </TextBox>
                </View>
              </View>
              <View className="items-center justify-center flex-row ">
                <View className="flex-row w-28 h-12 items-center justify-evenly">
                  <Pressable
                    onPress={() =>
                      cartDispatch({ type: "REDUCE_FROM_CART", payload: item })
                    }
                  >
                    <TextBox semibold classNames="p-1 rounded-lg bg-black">
                      <Entypo name="minus" size={15} color="white" />
                    </TextBox>
                  </Pressable>
                  <TextBox semibold classNames="text-white">
                    {cartState.cart[item.id].qty}
                  </TextBox>
                  <Pressable
                    onPress={() =>
                      cartDispatch({ type: "ADD_TO_CART", payload: item })
                    }
                  >
                    <TextBox semibold classNames="p-1 rounded-lg bg-black">
                      <Entypo name="plus" size={15} color="white" />
                    </TextBox>
                  </Pressable>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      {cartItems.length > 0 && (
        <View className="h-[35vh] w-full bg-[#353232] rounded-t-3xl top-auto bottom-0 px-10 pt-2 pb-5 justify-evenly">
          <View className="w-full justify-around">
            <TextBox semibold classNames="text-white text-lg">
              {authState.user.name}
            </TextBox>
            <TextBox semibold classNames="text-white text-lg">
              {authState.user.hostel.toUpperCase()} {authState.user.room_no}
            </TextBox>
            <TextBox semibold classNames="text-white text-lg">
              {authState.user.phone_no || "No phone no."}
            </TextBox>
          </View>
          <View className="h-[1px] w-full bg-white" />
          <View className="w-full justify-between flex-row">
            <View className="flex-row items-center">
              <TextBox semibold classNames="text-white text-xl">
                Total
              </TextBox>
              <TextBox semibold classNames="text-white mt-1 ml-1">
                (₹5 Delivery)
              </TextBox>
            </View>
            <TextBox semibold classNames="text-white text-xl">
              ₹ {total}
            </TextBox>
          </View>
          <Button disabled={disabled} onPress={handleCreateOrder}>
            {disabled ? (
              <ActivityIndicator size="large" color="#1E1B1B" />
            ) : (
              <TextBox
                semibold
                classNames="items-center justify-center text-lg"
              >
                Create Order
              </TextBox>
            )}
          </Button>
        </View>
      )}
    </View>
  );
};

export default Cart;
