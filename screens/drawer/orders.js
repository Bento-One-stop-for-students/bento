import React from "react";

import { View ***REMOVED*** from "react-native";
import { useFocusEffect ***REMOVED*** from "@react-navigation/native";
import { TouchableHighlight ***REMOVED*** from "react-native-gesture-handler";

import TextBox from "../../components/TextBox";
import { getUserOrders ***REMOVED*** from "../../lib/firebase/food-order";
import { AuthContext ***REMOVED*** from "../../lib/context/authContext";
import { FlatList ***REMOVED*** from "native-base";
import OrderItem from "../../components/foodOrder/OrderItem";
import CancelOrderModal from "../../components/foodOrder/CancelOrderModal";

const Orders = ({ navigation ***REMOVED***) => {
  const [openCancelOrderModal, setOpenCancelOrderModal] = React.useState(false);
  const [isComponentOpen, setIsComponentOpen] = React.useState(false);
  const { authState ***REMOVED*** = React.useContext(AuthContext);
  const [orders, setOrders] = React.useState([]);
  useFocusEffect(
    React.useCallback(() => {
      setIsComponentOpen(false);
      const getOrders = async () => {
      ***REMOVED***
          const res = await getUserOrders(authState.user.id);
          setOrders(res);
    ***REMOVED*** catch (err) {
          console.log(err);
    ***REMOVED***
  ***REMOVED***;
      getOrders();
***REMOVED***, [])
  );
  return (
    <View className="flex-1 items-center justify-start">
      <TextBox
        semibold
        classNames="text-[#353232] text-[110px] w-[200vw] text-center absolute"
        style={{ includeFontPadding: false, lineHeight: 150 ***REMOVED******REMOVED***
      >
        BENTO
      </TextBox>
      <View className="flex-row items-center justify-between w-full mt-16 px-10">
        <TextBox semibold classNames="text-white text-3xl">
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
      {orders == [] ? (
        <View>
          <TextBox semibold>No Orders...</TextBox>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{ paddingBottom: 150 ***REMOVED******REMOVED***
          className="w-full mt-10 px-5"
          data={orders***REMOVED***
          renderItem={({ item ***REMOVED***) => (
            <OrderItem
              item={item***REMOVED***
              isComponentOpen={isComponentOpen***REMOVED***
              setIsComponentOpen={setIsComponentOpen***REMOVED***
              cancelOrder={setOpenCancelOrderModal***REMOVED***
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
