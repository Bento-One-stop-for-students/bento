import React from "react";

import { View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableHighlight } from "react-native-gesture-handler";

import TextBox from "../../components/TextBox";
import { AuthContext } from "../../lib/context/authContext";
import BookingItem from "../../components/barber/BookingItem";
import { getBarberBooking } from "../../lib/firebase/barber";

const Bookings = ({ navigation }) => {
  const { authState } = React.useContext(AuthContext);
  const [booking, setBooking] = React.useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const getBooking = async () => {
        try {
          const res = await getBarberBooking(authState.user.id);
          setBooking(res);
        } catch (err) {
          console.log(err);
        }
      };
      getBooking();
    }, [])
  );

  return (
    <View className="flex-1 items-center justify-start">
      <TextBox semibold   
        classNames="text-[#1E1B1B] text-[110px] w-[200vw] text-center absolute"
        style={{ includeFontPadding: false, lineHeight: 150 }}
      >
        BENTO
      </TextBox>
      <View className="flex-row items-center justify-between w-full mt-16 px-10">
        <TextBox semibold    classNames="text-white text-3xl">Bookings</TextBox>
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
