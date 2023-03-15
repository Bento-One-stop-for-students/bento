import { View, ActivityIndicator, Image ***REMOVED*** from "react-native";
import React from "react";
import TextBox from "../TextBox";
import BookingItem from "../barber/BookingItem";
import BarberQueueModal from "../barber/BarberQueueModal";

const Barber = ({ isLoading, statusLoading, barberStatus, barberBooking ***REMOVED***) => {
  const [showBarberQueueModal, setShowBarberQueueModal] = React.useState(false);
  return (
    <View
      className={`${
        barberStatus == "OPEN" ? "bg-[#AE78D3]" : "bg-[#CCC]"
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
      {isLoading ? (
        <ActivityIndicator size="large" color="black" />
      ) : barberStatus == "OPEN" || barberStatus == "BREAK" ? (
        !barberBooking ? (
          <>
            <TextBox
              semibold
              classNames="text-white text-[12px] p-2 py-4 bg-[#353232] rounded-2xl text-center"
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
          <>
            <TextBox semibold classNames="mb-2 text-center">
              You are already in queue!
            </TextBox>
            <BookingItem item={barberBooking***REMOVED*** />
          </>
        )
      ) : (
        <>
          <TextBox classNames="text-center">
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
