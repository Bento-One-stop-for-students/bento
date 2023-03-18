import React from "react";

import { View ***REMOVED*** from "react-native";
import { useFocusEffect ***REMOVED*** from "@react-navigation/native";
import { TouchableHighlight ***REMOVED*** from "react-native-gesture-handler";

import TextBox from "../../components/TextBox";
import { AuthContext ***REMOVED*** from "../../lib/context/authContext";
import BookingItem from "../../components/barber/BookingItem";
import { getBarberBooking ***REMOVED*** from "../../lib/firebase/barber";

const Bookings = ({ navigation ***REMOVED***) => {
  const { authState ***REMOVED*** = React.useContext(AuthContext);
  const [booking, setBooking] = React.useState([]);
  const res = getBarberBooking(authState.user.id);
  setBooking(res);

  return (
    <View className="flex-1 items-center justify-start">
      <TextBox
        semibold
        classNames="text-primary-black text-[100px]  w-[200vw] text-center absolute"
        style={{ includeFontPadding: false, lineHeight: 150 ***REMOVED******REMOVED***
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
      ***REMOVED******REMOVED***
        >
          <>
            <View className="w-10 h-2 m-1 bg-white" />
            <View className="w-10 h-2 m-1 bg-white" />
            <View className="w-10 h-2 m-1 bg-white" />
          </>
        </TouchableHighlight>
      </View>
      <View className="w-full px-5">
        <BookingItem item={booking***REMOVED*** />
      </View>
    </View>
  );
***REMOVED***

export default Bookings;
