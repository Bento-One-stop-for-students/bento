import { Center, HStack, Modal, VStack } from "native-base";
import TextBox from "../shared/styles/TextBox";
import Button from "../shared/styles/Button";
import { Alert, StyleSheet } from "react-native";
import { bookBarber, getBarberIdFromUser } from "../../../lib/firebase/Barber";
import { AuthContext } from "../../../hooks/context";
import React from "react";

const BarberModal = (props) => {
  const { user } = React.useContext(AuthContext);
  const [check, setCheck] = React.useState();
  return (
    <Center>
      <Modal
        isOpen={props.showModal}
        onClose={() => props.setShowModal(false)}
        size="lg"
      >
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              {props.hair && (
                <HStack alignItems="center" justifyContent="space-between">
                  <TextBox bold>Hair</TextBox>
                  <TextBox>70 Rs</TextBox>
                </HStack>
              )}
              {props.beard && (
                <HStack alignItems="center" justifyContent="space-between">
                  <TextBox bold>Beard</TextBox>
                  <TextBox>30 Rs</TextBox>
                </HStack>
              )}
              {props.massage && (
                <HStack alignItems="center" justifyContent="space-between">
                  <TextBox bold>Massage</TextBox>
                  <TextBox>40 Rs</TextBox>
                </HStack>
              )}
              <HStack
                alignItems="center"
                justifyContent="space-between"
                style={{
                  borderTopWidth: StyleSheet.hairlineWidth,
                  paddingVertical: 5,
                }}
              >
                <TextBox bold>Sub Total</TextBox>
                <TextBox bold>{props.total} Rs</TextBox>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer className="items-center justify-center">
            <Button
              class="w-[70vw]"
              text="Book my appointment"
              onPress={async () => {
                const newUser = {
                  ...user,
                  hair: props.hair,
                  beard: props.beard,
                  massage: props.massage,
                  ewt: 15,
                  serviceTime:
                    (props.hair ? 15 : 0) +
                    (props.beard ? 10 : 0) +
                    (props.massage ? 10 : 0),
                };

                try {
                  const res = await bookBarber(newUser);
                  if (res) {
                    Alert.alert("booked");
                  } else {
                    Alert.alert("exists");
                  }
                } catch (err) {
                  Alert.alert("couldn't make appointment. try again later");
                }
              }}
            />
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default BarberModal;
