import React from "react";

import { Entypo } from "@expo/vector-icons";
import {
  ActivityIndicator,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import Button from "../../components/Button";
import TextBox from "../../components/TextBox";
import messaging from "@react-native-firebase/messaging";
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
    await messaging().requestPermission();
    try {
      setDisabled(true);
      const token = await messaging().getToken();
      const res = await createUserOrder({
        id: authState.user.id,
        name: authState.user.name,
        hostel: authState.user.hostel,
        room_no: authState.user.room_no,
        mobile_no: authState.user.mobile_no,
        fcm_token: token,
        total,
        cart: cartItems,
      });
      const updatedOrders = await getUserOrders(authState.user.id);
      authDispatch({ type: "NOTIFICATION_TRUE", payload: res });
      authDispatch({ type: "GET_ORDERS", payload: updatedOrders });
    } catch (err) {
      console.log(err);
      authDispatch({
        type: "NOTIFICATION_TRUE",
        payload: `${
          err.response.status == 400
            ? "Items out of stock"
            : "Couldn't create order"
        }`,
      });
    } finally {
      cartDispatch({ type: "EMPTY_CART" });
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
      <View className="flex-center items-center">
        <TextBox
          semibold
          classNames="text-primary-black text-[100px] w-[110vw] text-center"
          style={{
            includeFontPadding: false,
            paddingTop: 100,
            fontFamily: "Poppins_700Bold",
          }}
        >
          BENTO
        </TextBox>
        <View className="flex-row items-center w-full h-full absolute">
          <TextBox semibold classNames="text-white text-3xl ml-10">
            Cart
          </TextBox>
        </View>
      </View>
      {cartItems.length < 1 && (
        <TextBox semibold classNames="text-white mt-44">
          Nothing to see here!
        </TextBox>
      )}
      <ScrollView className=" w-full px-5">
        {cartItems.map((item) => {
          return (
            <View
              className="flex-row justify-between items-center w-full my-2 bg-secondary-black  p-2 rounded-2xl"
              key={item.id}
            >
              <View className="flex-row items-center ">
                <Image
                  className=" w-14 h-14  rounded-lg"
                  source={
                    item.img_url
                      ? { uri: item.img_url }
                      : require("../../assets/images/no_image.png")
                  }
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
        <View className="h-[35vh] w-full bg-secondary-black  rounded-t-3xl top-auto bottom-0 px-5 pt-2 pb-5 justify-evenly">
          <View className="w-full justify-around">
            <TextBox semibold classNames="text-white text-xl">
              {authState.user.name}
            </TextBox>
            <TextBox classNames="text-white">
              Address : {authState.user.hostel.toUpperCase()} {authState.user.room_no}
            </TextBox>
            <TextBox classNames="text-white">
              Mobile No : {authState.user.mobile_no}
            </TextBox>
          </View>
          <View className="h-[1px] w-full bg-white" />
          <View className="w-full justify-between flex-row">
            <View className="flex-row items-center">
              <TextBox classNames="text-white text-xl">Total</TextBox>
              <TextBox semibold classNames="text-white mt-1 ml-1">
                (₹5 Delivery)
              </TextBox>
            </View>
            <TextBox semibold classNames="text-white text-xl">
              ₹ {total}
            </TextBox>
          </View>
          <Button
            disabled={disabled}
            onPress={handleCreateOrder}
            classNames={`${disabled && "opacity-50"}`}
          >
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
