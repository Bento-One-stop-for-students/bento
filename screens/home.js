import React from "react";

import { Feather } from "@expo/vector-icons";
import { View, Pressable } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import TextBox from "../components/TextBox";
import Barber from "../components/home/Barber";
import { getStatus } from "../lib/firebase/user";
import SnackMen from "../components/home/SnackMen";
import { AuthContext } from "../lib/context/authContext";
import { CartContext } from "../lib/context/cartContext";
import Constants from "expo-constants";
import {
  getBarberBooking,
  getWaitingQueueLength,
} from "../lib/firebase/barber";

const version = Constants.expoConfig.version;

SplashScreen.preventAutoHideAsync();

const Home = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = React.useState(false);
  const { authState } = React.useContext(AuthContext);
  const { value } = React.useContext(CartContext);
  const { cartState } = value;
  const [barberWaitingQueueLength, setBarberWaitingQueueLength] =
    React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [statusLoading, setStatusLoading] = React.useState(true);
  const [barberBooking, setBarberBooking] = React.useState(false);
  const [barberStatus, setBarberStatus] = React.useState("CLOSED");
  const [snackmenStatus, setSnackmenStatus] = React.useState("CLOSED");
  var size = Object.keys(cartState.cart).length;

  React.useEffect(() => {
    getWaitingQueueLength(setBarberWaitingQueueLength);
    getBarberBooking(authState.user.id, setBarberBooking, setIsLoading);
    getStatus(setBarberStatus, setSnackmenStatus, setStatusLoading);
    setAppIsReady(true);
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  if (!appIsReady) {
    return null;
  }

  return (
    <View
      className="flex-1 items-center justify-start"
      onLayout={onLayoutRootView}
    >
      <View className="flex-center items-center w-full pt-2">
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
        <View className="flex-row items-center justify-end w-full h-full pr-10 absolute">
          <Pressable
            className=" pl-3 pt-3 mr-5 pb-3"
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
              classNames="text-primary-snackmen  text-md bg-[#1E1b1b] px-2 pt-1 rounded-full absolute"
            >
              {size}
            </TextBox>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <>
              <View className="w-10 h-2 m-1 bg-white" />
              <View className="w-10 h-2 m-1 bg-white" />
              <View className="w-10 h-2 m-1 bg-white" />
            </>
          </Pressable>
        </View>
      </View>
      <View className="w-full mt-2 ml-14">
        <TextBox semibold classNames={"text-white text-3xl w-[80vw]"}>
          Hi, {authState.user.name && authState.user.name.split(" ")[0]}👋
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
      <TextBox classNames="text-white w-full pl-5 pt-2 opacity-40">
        v{version}
      </TextBox>
    </View>
  );
};

export default Home;
