import React from "react";
import { View ***REMOVED*** from "react-native";
import { Feather ***REMOVED*** from "@expo/vector-icons";
import { TouchableHighlight ***REMOVED*** from "react-native-gesture-handler";

import Button from "../components/Button";
import TextBox from "../components/TextBox";
import { AuthContext ***REMOVED*** from "../lib/context/authContext";
import { Image ***REMOVED*** from "react-native";
import BarberQueueModal from "../components/barber/BarberQueueModal";
import { Pressable ***REMOVED*** from "react-native";
import { CartContext ***REMOVED*** from "../lib/context/cartContext";
import { getStatus ***REMOVED*** from "../lib/firebase/user";
import { getBarberBooking ***REMOVED*** from "../lib/firebase/barber";
import BookingItem from "../components/barber/BookingItem";

const Home = ({ navigation ***REMOVED***) => {
  const { authState ***REMOVED*** = React.useContext(AuthContext);
  const { value ***REMOVED*** = React.useContext(CartContext);
  const { cartState ***REMOVED*** = value;
  const { status, statusLoading ***REMOVED*** = getStatus();

  const [barberBooking, setBarberBooking] = React.useState(false);
  const [barberStatus, setIsBarberOpen] = React.useState("CLOSED");
  const [snackmenStatus, setIsSnackmenOpen] = React.useState("CLOSED");
  const [showBarberQueueModal, setShowBarberQueueModal] = React.useState(false);

  var size = Object.keys(cartState.cart).length;

  React.useEffect(() => {
    if (statusLoading == false) {
      setIsBarberOpen(status[0].status);
***REMOVED***
***REMOVED***, [status, statusLoading]);

  React.useEffect(() => {
    const getBooking = async () => {
    ***REMOVED***
        const res = await getBarberBooking(authState.user.id);
        setBarberBooking(res);
  ***REMOVED*** catch (err) {
        console.log(err);
  ***REMOVED***
***REMOVED***;
    getBooking();
***REMOVED***, []);

  return (
    <View className="flex-1 items-center justify-start">
      <TextBox
        semibold
        classNames="text-[#353232] text-[110px] w-[200vw] text-center absolute"
        style={{ includeFontPadding: false, lineHeight: 150 ***REMOVED******REMOVED***
      >
        BENTO
      </TextBox>
      <View className="flex-row items-center justify-end w-full mt-16 mr-10">
        <Pressable
          className=" pl-4 pt-3 mr-5"
          onPress={() => {
            navigation.navigate("Cart");
      ***REMOVED******REMOVED***
        >
          <Feather
            name="shopping-cart"
            style={{ transform: [{ rotateY: "180deg" ***REMOVED***] ***REMOVED******REMOVED***
            size={35***REMOVED***
            color="white"
          />
          <TextBox
            semibold
            classNames="text-[#FFA410] text-md bg-[#1E1b1b] px-2 pt-1 rounded-full absolute"
          >
            {size***REMOVED***
          </TextBox>
        </Pressable>
        <TouchableHighlight
          onPress={() => {
            navigation.openDrawer();
      ***REMOVED******REMOVED***
        >
          <>
            <View className="w-10 h-2 m-1 bg-white" />
            <View className="w-10 h-2 m-1 bg-white" />
            <View className="w-10 h-2 m-1 bg-white" />
          </>
        </TouchableHighlight>
      </View>
      <View className="w-full ml-14">
        <TextBox semibold classNames={"text-white mt-12 text-3xl w-[80vw]"***REMOVED***>
          Hi, {authState.user ? authState.user.name.split(" ")[0] : ""***REMOVED***👋
        </TextBox>
      </View>
      <View className="bg-[#AE78D3] w-[92vw] h-[32vh] rounded-3xl mt-3 p-5 flex-col justify-between">
        <Image
          source={require("../assets/images/hair_brush.png")***REMOVED***
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
        ***REMOVED***`***REMOVED***
          >
            {statusLoading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <TextBox semibold classNames="text-white">
                {barberStatus***REMOVED***
              </TextBox>
            )***REMOVED***
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
            ***REMOVED***`***REMOVED***
                onPress={(e) => {
                  setShowBarberQueueModal(true);
            ***REMOVED******REMOVED***
                disabled={barberStatus == "BREAK" ? true : false***REMOVED***
              >
                <TextBox semibold classNames="text-white">
                  {barberStatus == "OPEN" ? "Queue Now" : "Barber on break"***REMOVED***
                </TextBox>
              </Button>
            </>
          ) : (
            <View>
              <TextBox semibold classNames="mb-2">
                You are already in queue!
              </TextBox>
              <BookingItem item={barberBooking***REMOVED*** />
            </View>
          )
        ) : (
          <View>
            <TextBox semibold>Closed</TextBox>
          </View>
        )***REMOVED***
      </View>
      <View className="bg-[#FFA410] w-[92vw] rounded-3xl h-[32vh] mt-5 p-5 flex-col justify-between">
        <Image
          source={require("../assets/images/donut.png")***REMOVED***
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
        ***REMOVED***`***REMOVED***
          >
            <TextBox semibold classNames="text-white">
              {snackmenStatus***REMOVED***
            </TextBox>
          </View>
        </View>
        <Pressable
          className="w-full h-16 border border-1 rounded-2xl items-center justify-center bg-[#FFA410]"
          onPress={() => {
            navigation.navigate("Your Orders");
      ***REMOVED******REMOVED***
        >
          <TextBox semibold classNames="text-[15px]">
            View Orders
          </TextBox>
        </Pressable>
        <Button
          classNames=" bg-[#1E1B1B]"
          onPress={() => {
            navigation.navigate("Food Order");
      ***REMOVED******REMOVED***
        >
          <TextBox semibold classNames=" text-white">
            Order Now
          </TextBox>
        </Button>
      </View>
      <BarberQueueModal
        isOpen={showBarberQueueModal***REMOVED***
        onClose={setShowBarberQueueModal***REMOVED***
      />
    </View>
  );
***REMOVED***

export default Home;
