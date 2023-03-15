import React from "react";

import { View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableHighlight } from "react-native-gesture-handler";

import TextBox from "../../components/TextBox";
import { getUserOrders } from "../../lib/firebase/food-order";
import { AuthContext } from "../../lib/context/authContext";
import { FlatList } from "native-base";
import OrderItem from "../../components/foodOrder/OrderItem";
import CancelOrderModal from "../../components/foodOrder/CancelOrderModal";

const Orders = ({ navigation }) => {
  const [openCancelOrderModal, setOpenCancelOrderModal] = React.useState(false);
  const [isComponentOpen, setIsComponentOpen] = React.useState(false);
  const { authState } = React.useContext(AuthContext);
  const [orders, setOrders] = React.useState([]);
  useFocusEffect(
    React.useCallback(() => {
      setIsComponentOpen(false);
      const getOrders = async () => {
        try {
          const res = await getUserOrders(authState.user.id);
          setOrders(res);
        } catch (err) {
          console.log(err);
        }
      };
      getOrders();
    }, [])
  );
  return (
    <View className="flex-1 items-center justify-start">
      <TextBox
        semibold
        classNames="text-[#353232] text-[110px] w-[200vw] text-center absolute"
        style={{ includeFontPadding: false, lineHeight: 150 }}
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
          }}
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
          contentContainerStyle={{ paddingBottom: 150 }}
          className="w-full mt-10 px-5"
          data={orders}
          renderItem={({ item }) => (
            <OrderItem
              item={item}
              isComponentOpen={isComponentOpen}
              setIsComponentOpen={setIsComponentOpen}
              cancelOrder={setOpenCancelOrderModal}
            />
          )}
          keyExtractor={(item, index) => index}
        />
      )}
      <CancelOrderModal
        isOpen={openCancelOrderModal}
        onClose={setOpenCancelOrderModal}
      />
    </View>
  );
};

export default Orders;
