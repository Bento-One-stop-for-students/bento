import { View, Text } from "react-native";
import React from "react";
import { HStack, Modal, VStack } from "native-base";
import TextBox from "../shared/styles/TextBox";
import { CartContext } from "../../../hooks/context";

const CheckoutModal = (props) => {
  const { cart } = React.useContext(CartContext);

  React.useEffect(() => {
    console.log("refreshed");
  }, [cart]);

  return (
    <Modal
      size={"xs"}
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
            {cart.map((item) => {
              return (
                <HStack
                  alignItems="center"
                  justifyContent="space-between"
                  key={item.id}
                >
                  <TextBox>
                    <TextBox bold>{item.name}{" : "}</TextBox>
                    <TextBox bold>{item.price}</TextBox>
                  </TextBox>
                  <TextBox>{item.amount}</TextBox>
                </HStack>
              );
            })}
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default CheckoutModal;
