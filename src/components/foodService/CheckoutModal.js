import { View, Text ***REMOVED*** from "react-native";
import React from "react";
import { HStack, Modal, VStack ***REMOVED*** from "native-base";
import TextBox from "../shared/styles/TextBox";
import { CartContext ***REMOVED*** from "../../../hooks/context";

const CheckoutModal = (props) => {
  const { cart ***REMOVED*** = React.useContext(CartContext);

  React.useEffect(() => {
    console.log("refreshed");
***REMOVED***, [cart]);

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
            {cart.map((item) => {
              return (
                <HStack
                  alignItems="center"
                  justifyContent="space-between"
                  key={item.id***REMOVED***
                >
                  <TextBox>
                    <TextBox bold>{item.name***REMOVED***{" : "***REMOVED***</TextBox>
                    <TextBox bold>{item.price***REMOVED***</TextBox>
                  </TextBox>
                  <TextBox>{item.amount***REMOVED***</TextBox>
                </HStack>
              );
        ***REMOVED***)***REMOVED***
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
***REMOVED***

export default CheckoutModal;
