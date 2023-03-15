import { View, ActivityIndicator, Image } from "react-native";
import React from "react";
import TextBox from "../TextBox";
import BookingItem from "../barber/BookingItem";
import BarberQueueModal from "../barber/BarberQueueModal";

const Barber = ({ isLoading, statusLoading, barberStatus, barberBooking }) => {
  const [showBarberQueueModal, setShowBarberQueueModal] = React.useState(false);
  return (
    <View
      className={`${
        barberStatus == "OPEN" ? "bg-[#AE78D3]" : "bg-[#CCC]"
      } w-[92vw] h-[34vh] rounded-3xl mt-3 p-5 flex-col justify-between`}
    >
      <Image
        source={require("../../assets/images/hair_brush.png")}
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
        <>
          <TextBox classNames="text-center">
            {"Shop is closed for today.\nSee you tomorrow!"}
          </TextBox>
          <View className="w-full items-center justify-center border-[1px] rounded-2xl">
            <TextBox semibold classNames="text-2xl" style={{ lineHeight: 50 }}>
              Closed
            </TextBox>
          </View>
        </>
      )}
      <BarberQueueModal
        isOpen={showBarberQueueModal}
        onClose={setShowBarberQueueModal}
      />
    </View>
  );
};

export default Barber;
