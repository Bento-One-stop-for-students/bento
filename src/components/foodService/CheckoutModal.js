import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { HStack, Modal, VStack } from "native-base";
import TextBox from "../shared/styles/TextBox";
import { CartContext } from "../../../hooks/cart";

const CheckoutModal = (props) => {
  const [total, setTotal] = React.useState(0);
  const { state } = React.useContext(CartContext);
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
    console.log(items);
  }, [items]);
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
            {items.map((item) => {
              return (
                <HStack
                  alignItems="center"
                  justifyContent="space-between"
                  key={item.id}
                >
                  <TextBox>
                    <TextBox bold>
                      {item.name}
                      {" : "}
                    </TextBox>
                    <TextBox bold>{item.price}</TextBox>
                  </TextBox>
                  <TextBox>{item.qty}</TextBox>
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
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default CheckoutModal;
