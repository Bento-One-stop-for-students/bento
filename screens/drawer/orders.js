import React from "react";

import { View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

import TextBox from "../../components/TextBox";
import { AuthContext } from "../../lib/context/authContext";
import { FlatList } from "native-base";
import OrderItem from "../../components/foodOrder/OrderItem";
import CancelOrderModal from "../../components/foodOrder/CancelOrderModal";

const Orders = ({ navigation }) => {
  const [openCancelOrderModal, setOpenCancelOrderModal] = React.useState(false);
  const [isComponentOpen, setIsComponentOpen] = React.useState(false);
  const { authState } = React.useContext(AuthContext);
  React.useEffect(() => {}, [authState]);
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
      </View>
      {authState.orders.length == 0 ? (
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
      )}
      <CancelOrderModal
        isOpen={openCancelOrderModal}
        onClose={setOpenCancelOrderModal}
      />
    </View>
  );
};

export default Orders;
