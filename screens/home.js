import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";

import Button from "../components/Button";
import TextBox from "../components/TextBox";
import { AuthContext } from "../lib/context/authContext";
import { Image } from "react-native";
import BarberQueueModal from "../components/barber/BarberQueueModal";
import { Pressable } from "react-native";
import { CartContext } from "../lib/context/cartContext";
import { getStatus } from "../lib/firebase/user";
import { getBarberBooking } from "../lib/firebase/barber";
import BookingItem from "../components/barber/BookingItem";

const Home = ({ navigation }) => {
  const { authState } = React.useContext(AuthContext);
  const { value } = React.useContext(CartContext);
  const { cartState } = value;
  const { status, statusLoading } = getStatus();

  const [barberBooking, setBarberBooking] = React.useState(false);
  const [barberStatus, setIsBarberOpen] = React.useState("CLOSED");
  const [snackmenStatus, setIsSnackmenOpen] = React.useState("CLOSED");
  const [showBarberQueueModal, setShowBarberQueueModal] = React.useState(false);

  var size = Object.keys(cartState.cart).length;

  React.useEffect(() => {
    if (statusLoading == false) {
      setIsBarberOpen(status[0].status);
    }
  }, [status, statusLoading]);

  React.useEffect(() => {
    const getBooking = async () => {
      try {
        const res = await getBarberBooking(authState.user.id);
        setBarberBooking(res);
      } catch (err) {
        console.log(err);
      }
    };
    getBooking();
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
      <View className="bg-[#AE78D3] w-[92vw] h-[32vh] rounded-3xl mt-3 p-5 flex-col justify-between">
        <Image
          source={require("../assets/images/hair_brush.png")}
          className="absolute h-full w-full opacity-60"
          resizeMode="contain"
        />
        <View className="flex-row justify-between">
          <TextBox semibold classNames="text-3xl">
            MBH Barber
          </TextBox>
          <View
            className={`w-24 h-12 rounded-2xl items-center justify-center ${
              barberStatus == "OPEN"
                ? barberStatus == "BREAK"
                  ? "bg-orange-500"
                  : "bg-green-500"
                : "bg-red-600"
            }`}
          >
            {statusLoading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <TextBox semibold classNames="text-white">
                {barberStatus}
              </TextBox>
            )}
          </View>
        </View>
        {barberStatus == "OPEN" || barberStatus == "BREAK" ? (
          !barberBooking ? (
            <>
              <TextBox
                semibold
                classNames="text-white text-[12px] p-2 py-4 bg-[#353232] rounded-2xl"
              >
                20 people in queue right now
              </TextBox>
              <Button
                classNames={`bg-[#1E1B1B] ${
                  barberStatus == "BREAK" && "opacity-50"
                }`}
                onPress={(e) => {
                  setShowBarberQueueModal(true);
                }}
                disabled={barberStatus == "BREAK" ? true : false}
              >
                <TextBox semibold classNames="text-white">
                  {barberStatus == "OPEN" ? "Queue Now" : "Barber on break"}
                </TextBox>
              </Button>
            </>
          ) : (
            <View>
              <TextBox semibold classNames="mb-2">
                You are already in queue!
              </TextBox>
              <BookingItem item={barberBooking} />
            </View>
          )
        ) : (
          <View>
            <TextBox semibold>Closed</TextBox>
          </View>
        )}
      </View>
      <View className="bg-[#FFA410] w-[92vw] rounded-3xl h-[32vh] mt-5 p-5 flex-col justify-between">
        <Image
          source={require("../assets/images/donut.png")}
          className="absolute h-full w-full opacity-80 mt-5"
          resizeMode="contain"
        />
        <View className="flex-row justify-between">
          <TextBox semibold classNames="text-3xl">
            Snackmen
          </TextBox>
          <View
            className={`w-24 h-12 rounded-2xl items-center justify-center ${
              snackmenStatus == "OPEN"
                ? snackmenStatus == "BREAK"
                  ? "bg-orange-500"
                  : "bg-green-500"
                : "bg-red-600"
            }`}
          >
            <TextBox semibold classNames="text-white">
              {snackmenStatus}
            </TextBox>
          </View>
        </View>
        <Pressable
          className="w-full h-16 border border-1 rounded-2xl items-center justify-center bg-[#FFA410]"
          onPress={() => {
            navigation.navigate("Your Orders");
          }}
        >
          <TextBox semibold classNames="text-[15px]">
            View Orders
          </TextBox>
        </Pressable>
        <Button
          classNames=" bg-[#1E1B1B]"
          onPress={() => {
            navigation.navigate("Food Order");
          }}
        >
          <TextBox semibold classNames=" text-white">
            Order Now
          </TextBox>
        </Button>
      </View>
      <BarberQueueModal
        isOpen={showBarberQueueModal}
        onClose={setShowBarberQueueModal}
      />
    </View>
  );
};

export default Home;
