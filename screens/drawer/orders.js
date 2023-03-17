import React from "react";

import { View ***REMOVED*** from "react-native";
import { TouchableHighlight ***REMOVED*** from "react-native-gesture-handler";

import TextBox from "../../components/TextBox";
import { AuthContext ***REMOVED*** from "../../lib/context/authContext";
import { FlatList ***REMOVED*** from "native-base";
import OrderItem from "../../components/foodOrder/OrderItem";
import CancelOrderModal from "../../components/foodOrder/CancelOrderModal";

const Orders = ({ navigation ***REMOVED***) => {
  const [openCancelOrderModal, setOpenCancelOrderModal] = React.useState(false);
  const [isComponentOpen, setIsComponentOpen] = React.useState(false);
  const { authState ***REMOVED*** = React.useContext(AuthContext);
  React.useEffect(() => {***REMOVED***, [authState]);
  return (
    <View className="flex-1 items-center justify-start">
      <View className="flex-center items-center">
        <TextBox
          semibold
          classNames="text-[#1E1B1B] text-[110px] w-[110vw] text-center"
          style={{
            includeFontPadding: false,
            paddingTop: 100,
            fontFamily: "Poppins_700Bold",
      ***REMOVED******REMOVED***
        >
          BENTO
        </TextBox>
        <View className="flex-row items-center justify-around w-full h-full absolute">
          <TextBox semibold classNames="text-white text-3xl mr-10">
            Orders
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
      </View>
      {authState.orders.length == 0 ? (
        <View>
          <TextBox semibold classNames="text-white pt-24">
            No orders! Order now...
          </TextBox>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{ paddingBottom: 150 ***REMOVED******REMOVED***
          className="w-full px-5"
          data={authState.orders***REMOVED***
          renderItem={({ item ***REMOVED***) => (
            <OrderItem
              item={item***REMOVED***
              isComponentOpen={isComponentOpen***REMOVED***
              setIsComponentOpen={setIsComponentOpen***REMOVED***
              cancelOrderModal={setOpenCancelOrderModal***REMOVED***
            />
          )***REMOVED***
          keyExtractor={(item, index) => index***REMOVED***
        />
      )***REMOVED***
      <CancelOrderModal
        isOpen={openCancelOrderModal***REMOVED***
        onClose={setOpenCancelOrderModal***REMOVED***
      />
    </View>
  );
***REMOVED***

export default Orders;
