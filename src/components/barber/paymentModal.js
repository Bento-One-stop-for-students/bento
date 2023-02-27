import { Center, HStack, Modal, VStack ***REMOVED*** from "native-base";
import TextBox from "../shared/styles/TextBox";
import Button from "../shared/styles/Button";
import { Alert, StyleSheet ***REMOVED*** from "react-native";
import { bookBarber, getBarberIdFromUser ***REMOVED*** from "../../../lib/firebase/Barber";
import { AuthContext ***REMOVED*** from "../../../hooks/context";
import React from "react";

const BarberModal = (props) => {
  const { user ***REMOVED*** = React.useContext(AuthContext);
  const [check, setCheck] = React.useState();
  return (
    <Center>
      <Modal
        isOpen={props.showModal***REMOVED***
        onClose={() => props.setShowModal(false)***REMOVED***
        size="lg"
      >
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={3***REMOVED***>
              {props.hair && (
                <HStack alignItems="center" justifyContent="space-between">
                  <TextBox bold>Hair</TextBox>
                  <TextBox>70 Rs</TextBox>
                </HStack>
              )***REMOVED***
              {props.beard && (
                <HStack alignItems="center" justifyContent="space-between">
                  <TextBox bold>Beard</TextBox>
                  <TextBox>30 Rs</TextBox>
                </HStack>
              )***REMOVED***
              {props.massage && (
                <HStack alignItems="center" justifyContent="space-between">
                  <TextBox bold>Massage</TextBox>
                  <TextBox>40 Rs</TextBox>
                </HStack>
              )***REMOVED***
              <HStack
                alignItems="center"
                justifyContent="space-between"
                style={{
                  borderTopWidth: StyleSheet.hairlineWidth,
                  paddingVertical: 5,
            ***REMOVED******REMOVED***
              >
                <TextBox bold>Sub Total</TextBox>
                <TextBox bold>{props.total***REMOVED*** Rs</TextBox>
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
            ***REMOVED***;

              ***REMOVED***
                  const res = await bookBarber(newUser);
              ***REMOVED***
                    Alert.alert("booked");
              ***REMOVED*** else {
                    Alert.alert("exists");
              ***REMOVED***
            ***REMOVED*** catch (err) {
                  Alert.alert("couldn't make appointment. try again later");
            ***REMOVED***
          ***REMOVED******REMOVED***
            />
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
***REMOVED***

export default BarberModal;
