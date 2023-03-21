import React from "react";

import { FlatList } from "native-base";
import { View, Pressable } from "react-native";

import TextBox from "../../components/TextBox";
import { useFocusEffect } from "@react-navigation/native";
import { AuthContext } from "../../lib/context/authContext";
import OrderItem from "../../components/foodOrder/OrderItem";
import { getUserOrders } from "../../lib/firebase/food-order";
import CancelOrderModal from "../../components/foodOrder/CancelOrderModal";

const Orders = ({ navigation }) => {
  const { authState, authDispatch } = React.useContext(AuthContext);
  const [isComponentOpen, setIsComponentOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [openCancelOrderModal, setOpenCancelOrderModal] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const getInfoFromFirebase = async () => {
        try {
          setIsLoading(true);
          const orders = await getUserOrders(authState.user.id);
          authDispatch({ type: "GET_ORDERS", payload: orders });
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      };
      getInfoFromFirebase();
    }, [])
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
          }}
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
            }}
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
            contentContainerStyle={{ paddingBottom: 150 }}
            className="w-full px-5"
            data={authState.orders}
            renderItem={({ item }) => (
              <OrderItem
                item={item}
                isComponentOpen={isComponentOpen}
                setIsComponentOpen={setIsComponentOpen}
                cancelOrderModal={setOpenCancelOrderModal}
              />
            )}
            keyExtractor={(item, index) => index}
          />
        )
      ) : (
        <View>
          <TextBox semibold classNames="text-white pt-24">
            Loading Orders...
          </TextBox>
        </View>
      )}
      <CancelOrderModal
        isOpen={openCancelOrderModal}
        onClose={setOpenCancelOrderModal}
      />
    </View>
  );
};

export default Orders;
