import { View, Text, StyleSheet ***REMOVED*** from "react-native";
import React from "react";
import { HStack, Modal, VStack ***REMOVED*** from "native-base";
import TextBox from "../shared/styles/TextBox";
import { CartContext ***REMOVED*** from "../../../hooks/cart";

const CheckoutModal = (props) => {
  const [total, setTotal] = React.useState(0);
  const { state ***REMOVED*** = React.useContext(CartContext);
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
    console.log(items);
***REMOVED***, [items]);
  return (
    <Modal
      size={"xs"***REMOVED***
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
                  <TextBox>
                    <TextBox bold>
                      {item.name***REMOVED***
                      {" : "***REMOVED***
                    </TextBox>
                    <TextBox bold>{item.price***REMOVED***</TextBox>
                  </TextBox>
                  <TextBox>{item.qty***REMOVED***</TextBox>
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
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
***REMOVED***

export default CheckoutModal;
