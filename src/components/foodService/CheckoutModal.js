import { View, Text, StyleSheet, TouchableOpacity ***REMOVED*** from "react-native";
import React from "react";
import { Alert ***REMOVED*** from "react-native";
import { HStack, Modal, VStack ***REMOVED*** from "native-base";
import TextBox from "../shared/styles/TextBox";
import { CartContext ***REMOVED*** from "../../../hooks/cart";
import { EvilIcons ***REMOVED*** from "@expo/vector-icons";
import Button from "../shared/styles/Button";
import { pushItems ***REMOVED*** from "../../../lib/firebase/FoodService";
import { AuthContext ***REMOVED*** from "../../../hooks/context";

const CheckoutModal = (props) => {
  const { state, dispatch ***REMOVED*** = React.useContext(CartContext);
  const { user, isConnected ***REMOVED*** = React.useContext(AuthContext);
  const [total, setTotal] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  let items = Object.values(state.cart);

  const calculateTotal = (items) => {
    let amount = 0;
    items.forEach((item) => {
      amount += item.price * item.qty;
    ***REMOVED***
    setTotal(amount);
***REMOVED***;
  React.useEffect(() => {
    calculateTotal(items);
***REMOVED***, [items]);
  return (
    <Modal
      size={"md"***REMOVED***
      isOpen={props.showModal***REMOVED***
      onClose={() => {
        props.setShowModal(false);
  ***REMOVED******REMOVED***
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Checkout</Modal.Header>
        <Modal.Body>
          <VStack space={3***REMOVED***>
            {items.map((item) => {
              return (
                <HStack
                  alignItems="center"
                  justifyContent="space-between"
                  key={item.id***REMOVED***
                >
                  <TextBox bold>
                    {item.name***REMOVED***
                    {" : "***REMOVED***
                    {item.price***REMOVED***
                  </TextBox>
                  <View className="items-center justify-center flex-row ">
                    <TextBox>{item.qty***REMOVED*** </TextBox>
                    <TouchableOpacity
                      onPress={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: item ***REMOVED***)
                  ***REMOVED***
                    >
                      <EvilIcons name="close-o" size={30***REMOVED*** color="red" />
                    </TouchableOpacity>
                  </View>
                </HStack>
              );
        ***REMOVED***)***REMOVED***
            <HStack
              alignItems="center"
              justifyContent="space-between"
              style={{
                borderTopWidth: StyleSheet.hairlineWidth,
                paddingVertical: 5,
          ***REMOVED******REMOVED***
            >
              <TextBox bold>Sub Total</TextBox>
              <TextBox bold>Rs {total***REMOVED***</TextBox>
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
                  ***REMOVED***
              ***REMOVED***
                    Alert.alert("order created");
                    dispatch({ type: "EMPTY_CART" ***REMOVED***
              ***REMOVED*** else {
                    Alert.alert("couldn't create order");
              ***REMOVED***
            ***REMOVED***
                props.setShowModal(false);
                setDisabled(false);
          ***REMOVED******REMOVED***
              disabled={disabled***REMOVED***
            />
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
***REMOVED***

export default CheckoutModal;
