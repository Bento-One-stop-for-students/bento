import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Alert } from "react-native";
import { HStack, Modal, VStack } from "native-base";
import TextBox from "../shared/styles/TextBox";
import { CartContext } from "../../../hooks/cart";
import { EvilIcons } from "@expo/vector-icons";
import Button from "../shared/styles/Button";
import { pushItems } from "../../../lib/firebase/FoodService";
import { AuthContext } from "../../../hooks/context";

const CheckoutModal = (props) => {
  const { state, dispatch } = React.useContext(CartContext);
  const { user, isConnected } = React.useContext(AuthContext);
  const [total, setTotal] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  let items = Object.values(state.cart);

  const calculateTotal = (items) => {
    let amount = 0;
    items.forEach((item) => {
      amount += item.price * item.qty;
    });
    setTotal(amount);
  };
  React.useEffect(() => {
    calculateTotal(items);
  }, [items]);
  return (
    <Modal
      size={"md"}
      isOpen={props.showModal}
      onClose={() => {
        props.setShowModal(false);
      }}
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Checkout</Modal.Header>
        <Modal.Body>
          <VStack space={3}>
            {items.map((item) => {
              return (
                <HStack
                  alignItems="center"
                  justifyContent="space-between"
                  key={item.id}
                >
                  <TextBox bold>
                    {item.name}
                    {" : "}
                    {item.price}
                  </TextBox>
                  <View className="items-center justify-center flex-row ">
                    <TextBox>{item.qty} </TextBox>
                    <TouchableOpacity
                      onPress={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: item })
                      }
                    >
                      <EvilIcons name="close-o" size={30} color="red" />
                    </TouchableOpacity>
                  </View>
                </HStack>
              );
            })}
            <HStack
              alignItems="center"
              justifyContent="space-between"
              style={{
                borderTopWidth: StyleSheet.hairlineWidth,
                paddingVertical: 5,
              }}
            >
              <TextBox bold>Sub Total</TextBox>
              <TextBox bold>Rs {total}</TextBox>
            </HStack>
            <Button
              class="w-full"
              text="Confirm"
              onPress={async () => {
                setDisabled(true);
                if (isConnected) {
                  const res = await pushItems({
                    id: user.id,
                    name: user.name,
                    hostel: user.hostel,
                    room_no: user.room_no,
                    mobile_no: user.mobile_no,
                    cart: items,
                  });
                  if (res) {
                    Alert.alert("order created");
                    dispatch({ type: "EMPTY_CART" });
                  } else {
                    Alert.alert("couldn't create order");
                  }
                }
                props.setShowModal(false);
                setDisabled(false);
              }}
              disabled={disabled}
            />
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default CheckoutModal;
