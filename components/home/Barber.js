import React from "react";

import { MaterialCommunityIcons ***REMOVED*** from "@expo/vector-icons";
import { View, ActivityIndicator, Image ***REMOVED*** from "react-native";

import Button from "../Button";
import TextBox from "../TextBox";
import BookingItem from "../barber/BookingItem";
import BarberQueueModal from "../barber/BarberQueueModal";
import CancelBookingModal from "../barber/CancelBookingModal";

const Barber = ({
  isLoading,
  barberStatus,
  barberBooking,
  barberWaitingQueueLength,
***REMOVED***) => {
  const [showBarberQueueModal, setShowBarberQueueModal] = React.useState(false);
  const [showBarberCancelModal, setShowBarberCancelModal] =
    React.useState(false);
  return (
    <View
      className={`${
        barberStatus == "OPEN" ? "bg-primary-barber" : "bg-primary-closed"
  ***REMOVED*** w-[92vw] h-[34vh] rounded-3xl mt-3 p-5 flex-col justify-between`***REMOVED***
    >
      <Image
        source={require("../../assets/images/hair_brush.png")***REMOVED***
        className="absolute h-full w-full opacity-60"
        resizeMode="contain"
      />
      <View className="flex-row justify-between">
        <TextBox semibold classNames="text-3xl">
          MBH Barber
        </TextBox>
        <View
          className={`w-8 h-8 rounded-full items-center justify-center border ${
            barberStatus == "OPEN"
              ? barberStatus == "BREAK"
                ? "bg-orange-500"
                : "bg-green-500"
              : "bg-red-600"
      ***REMOVED***`***REMOVED***
        ></View>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="black" />
      ) : barberStatus == "OPEN" || barberStatus == "BREAK" ? (
        !barberBooking ? (
          <>
            <View className="bg- rounded-xl items-center justify-center">
              <View className="items-center justify-center flex-row bg-primary-barber border rounded-md">
                <MaterialCommunityIcons
                  name="human-queue"
                  size={26***REMOVED***
                  color="black"
                  style={{ transform: [{ rotateY: "180deg" ***REMOVED***] ***REMOVED******REMOVED***
                />
                <TextBox classNames="ml-2 text-secondary-black">
                  {"Current Waiting : "***REMOVED***
                </TextBox>
                <TextBox
                  classNames="text-white bg-secondary-black px-2 rounded-tr-sm rounded-br-sm"
                  style={{ paddingTop: 10, fontSize: 20 ***REMOVED******REMOVED***
                >
                  {barberWaitingQueueLength***REMOVED***
                </TextBox>
              </View>
            </View>
            <Button
              classNames={`bg-primary-black ${
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
          <>
            <BookingItem item={barberBooking***REMOVED*** />
            <Button
              classNames="bg-primary-black"
              onPress={() => {
                setShowBarberCancelModal(true);
          ***REMOVED******REMOVED***
            >
              <TextBox classNames="text-white">Cancel</TextBox>
            </Button>
            <CancelBookingModal
              isOpen={showBarberCancelModal***REMOVED***
              onClose={setShowBarberCancelModal***REMOVED***
            />
          </>
        )
      ) : (
        <>
          <TextBox classNames="text-center p-2 border rounded-xl bg-primary-barber">
            {"Shop is closed for today.\nSee you tomorrow!"***REMOVED***
          </TextBox>
          <View className="w-full items-center justify-center border-[1px] rounded-2xl">
            <TextBox semibold classNames="text-2xl" style={{ lineHeight: 50 ***REMOVED******REMOVED***>
              Closed
            </TextBox>
          </View>
        </>
      )***REMOVED***
      <BarberQueueModal
        isOpen={showBarberQueueModal***REMOVED***
        onClose={setShowBarberQueueModal***REMOVED***
      />
    </View>
  );
***REMOVED***

export default Barber;
