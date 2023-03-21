import React from "react";

import { FlatList ***REMOVED*** from "native-base";
import { View, Pressable ***REMOVED*** from "react-native";

import TextBox from "../../components/TextBox";
import { useFocusEffect ***REMOVED*** from "@react-navigation/native";
import { AuthContext ***REMOVED*** from "../../lib/context/authContext";
import OrderItem from "../../components/foodOrder/OrderItem";
import { getUserOrders ***REMOVED*** from "../../lib/firebase/food-order";
import CancelOrderModal from "../../components/foodOrder/CancelOrderModal";

const Orders = ({ navigation ***REMOVED***) => {
  const { authState, authDispatch ***REMOVED*** = React.useContext(AuthContext);
  const [isComponentOpen, setIsComponentOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [openCancelOrderModal, setOpenCancelOrderModal] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const getInfoFromFirebase = async () => {
      ***REMOVED***
          setIsLoading(true);
          const orders = await getUserOrders(authState.user.id);
    ***REMOVED*** type: "GET_ORDERS", payload: orders ***REMOVED***
    ***REMOVED*** catch (err) {
          console.log(err);
    ***REMOVED*** finally {
          setIsLoading(false);
    ***REMOVED***
  ***REMOVED***;
      getInfoFromFirebase();
***REMOVED***, [])
  );

  return (
    <View className="flex-1 items-center justify-start">
      <View className="flex-center items-center">
        <TextBox
          semibold
          classNames="text-primary-black text-[100px]  w-[110vw] text-center"
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
          <Pressable
            onPress={() => {
              navigation.openDrawer();
        ***REMOVED******REMOVED***
          >
            <>
              <View className="w-10 h-2 m-1 bg-white" />
              <View className="w-10 h-2 m-1 bg-white" />
              <View className="w-10 h-2 m-1 bg-white" />
            </>
          </Pressable>
        </View>
      </View>
      {!isLoading ? (
        authState.orders.length == 0 ? (
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
        )
      ) : (
        <View>
          <TextBox semibold classNames="text-white pt-24">
            Loading Orders...
          </TextBox>
        </View>
      )***REMOVED***
      <CancelOrderModal
        isOpen={openCancelOrderModal***REMOVED***
        onClose={setOpenCancelOrderModal***REMOVED***
      />
    </View>
  );
***REMOVED***

export default Orders;
