import React from "react";

import { View, TouchableHighlight } from "react-native";

import TextBox from "../../components/TextBox";
import { AuthContext } from "../../lib/context/authContext";
import { getBarberBooking } from "../../lib/firebase/barber";
import BookingItem from "../../components/barber/BookingItem";

const Bookings = ({ navigation }) => {
  const { authState } = React.useContext(AuthContext);
  const [booking, setBooking] = React.useState([]);
  const res = getBarberBooking(authState.user.id);
  setBooking(res);

  return (
    <View className="flex-1 items-center justify-start">
      <TextBox
        semibold
        classNames="text-primary-black text-[100px]  w-[200vw] text-center absolute"
        style={{ includeFontPadding: false, lineHeight: 150 }}
      >
        BENTO
      </TextBox>
      <View className="flex-row items-center justify-between w-full mt-16 px-10">
        <TextBox semibold classNames="text-white text-3xl">
          Bookings
        </TextBox>
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
      <View className="w-full px-5">
        <BookingItem item={booking} />
      </View>
    </View>
  );
};

export default Bookings;
