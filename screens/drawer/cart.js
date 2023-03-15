import { ActivityIndicator, Touchable, View } from "react-native";
import React from "react";
import TextBox from "../../components/TextBox";
import { CartContext } from "../../lib/context/cartContext";
import { AuthContext } from "../../lib/context/authContext";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import Button from "../../components/Button";
import { createOrder } from "../../lib/firebase/food-order";
import { Alert } from "react-native";

const Cart = ({ navigation }) => {
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
      setTotal(amount);
    };
    calculateTotal(cartItems);
  }, [cartState]);

  const handleCreateOrder = async () => {
    setDisabled(true);
    const res = await createOrder({
      id: authState.user.id,
      name: authState.user.name,
      hostel: authState.user.hostel,
      room_no: authState.user.room_no,
      mobile_no: authState.user.mobile_no,
      cart: cartItems,
    });
    if (res) {
      Alert.alert("order created");
      cartDispatch({ type: "EMPTY_CART" });
      navigation.navigate("Home");
    } else {
      Alert.alert("couldn't create order");
    }
    setDisabled(false);
  };

  return (
    <View className="flex-1 items-center flex-col">
      <TextBox semibold   
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
          <TextBox semibold    classNames="text-black text-3xl">{"<"}</TextBox>
        </TouchableHighlight>
        <TextBox semibold    classNames="text-white text-3xl">Cart</TextBox>
      </View>
      {cartItems.length < 1 && (
        <TextBox semibold    classNames="text-white mt-44">Nothing to see here!</TextBox>
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
                  <TextBox semibold    classNames="text-white ml-5">{item.name}</TextBox>
                  <TextBox semibold    classNames="text-white ml-5">
                    Rs {item.price}
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
                    <TextBox semibold    classNames="p-1 rounded-lg bg-black">
                      <Entypo name="minus" size={15} color="white" />
                    </TextBox>
                  </Pressable>
                  <TextBox semibold    classNames="text-white">
                    {cartState.cart[item.id].qty}
                  </TextBox>
                  <Pressable
                    onPress={() =>
                      cartDispatch({ type: "ADD_TO_CART", payload: item })
                    }
                  >
                    <TextBox semibold    classNames="p-1 rounded-lg bg-black">
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
            <TextBox semibold    classNames="text-white text-lg">
              {authState.user.name}
            </TextBox>
            <TextBox semibold    classNames="text-white text-lg">
              {authState.user.hostel.toUpperCase()} {authState.user.room_no}
            </TextBox>
            <TextBox semibold    classNames="text-white text-lg">
              {authState.user.phone_no || "No phone no."}
            </TextBox>
          </View>
          <View className="h-[1px] w-full bg-white" />
          <View className="w-full justify-between flex-row">
            <TextBox semibold    classNames="text-white text-xl">Total</TextBox>
            <TextBox semibold    classNames="text-white text-xl">Rs {total}</TextBox>
          </View>
          <Button
            disabled={cartItems.length < 1 ? true : false}
            onPress={handleCreateOrder}
          >
            {disabled ? (
              <ActivityIndicator size="large" color="#1E1B1B" />
            ) : (
              <TextBox semibold    classNames="items-center justify-center text-lg">
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
