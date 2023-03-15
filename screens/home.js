import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";

import TextBox from "../components/TextBox";
import { AuthContext } from "../lib/context/authContext";
import { Pressable } from "react-native";
import { CartContext } from "../lib/context/cartContext";
import { getStatus } from "../lib/firebase/user";
import {
  getBarberBooking,
  getWaitingQueueLength,
} from "../lib/firebase/barber";
import Barber from "../components/home/Barber";
import SnackMen from "../components/home/SnackMen";
import { getUserOrders } from "../lib/firebase/food-order";

const Home = ({ navigation }) => {
  const { authState, authDispatch } = React.useContext(AuthContext);
  const { value } = React.useContext(CartContext);
  const { cartState } = value;
  const { status, statusLoading } = getStatus();
  const { booking, bookingLoading } = getBarberBooking(authState.user.id);
  const { waitingQueueLength, waitingQueueLengthLoading } =
    getWaitingQueueLength();

  const [barberWaitingQueueLength, setBarberWaitingQueueLength] =
    React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [barberBooking, setBarberBooking] = React.useState(false);
  const [barberStatus, setIsBarberOpen] = React.useState("CLOSED");
  const [snackmenStatus, setIsSnackmenOpen] = React.useState("CLOSED");

  var size = Object.keys(cartState.cart).length;

  // update status

  React.useEffect(() => {
    if (!statusLoading) {
      setIsBarberOpen(status[0].status);
      setIsSnackmenOpen(status[1].status);
    }
  }, [status, statusLoading]);

  // update barber booking

  React.useEffect(() => {
    if (!bookingLoading) {
      setBarberBooking(booking);
    }
  }, [booking, bookingLoading]);

  // update barber queue length

  React.useEffect(() => {
    if (!waitingQueueLengthLoading) {
      barberWaitingQueueLength(waitingQueueLength[0].queue_length);
    }
  }, [waitingQueueLength, waitingQueueLengthLoading]);

  React.useEffect(() => {
    const getInfoFromFirebase = async () => {
      try {
        setIsLoading(true);
        const orders = await getUserOrders(authState.user.id);
        authDispatch({ type: "GET_ORDERS", payload: orders });
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getInfoFromFirebase();
  }, []);

  return (
    <View className="flex-1 items-center justify-start">
      <TextBox
        semibold
        classNames="text-[#353232] text-[110px] w-[200vw] text-center absolute"
        style={{ includeFontPadding: false, lineHeight: 150 }}
      >
        BENTO
      </TextBox>
      <View className="flex-row items-center justify-end w-full mt-16 mr-10">
        <Pressable
          className=" pl-4 pt-3 mr-5"
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
        <TouchableHighlight
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <>
            <View className="w-10 h-2 m-1 bg-white" />
            <View className="w-10 h-2 m-1 bg-white" />
            <View className="w-10 h-2 m-1 bg-white" />
          </>
        </TouchableHighlight>
      </View>
      <View className="w-full ml-14">
        <TextBox semibold classNames={"text-white mt-12 text-3xl w-[80vw]"}>
          Hi, {authState.user ? authState.user.name.split(" ")[0] : ""}👋
        </TextBox>
      </View>
      <Barber
        isLoading={isLoading}
        statusLoading={statusLoading}
        barberStatus={barberStatus}
        barberBooking={barberBooking}
        barberWaitingQueueLength={barberWaitingQueueLength}
      />
      <SnackMen navigation={navigation} snackmenStatus={snackmenStatus} />
    </View>
  );
};

export default Home;
