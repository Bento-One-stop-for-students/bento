import { Center, HStack, Modal, VStack } from "native-base";
import TextBox from "../shared/styles/TextBox";
import Button from "../shared/styles/Button";
import { Alert, StyleSheet } from "react-native";
import { bookBarber } from "../../../lib/firebase/Barber";
import { AuthContext } from "../../../hooks/context";
import React from "react";
import { handleBranchName } from "../../../hooks/extras";

const OutpassModal = (props) => {
  const { user } = React.useContext(AuthContext);
  const name =
    user.name.split(" ")[0].charAt(0) +
    user.name.split(" ")[0].slice(1).toLowerCase() +
    " " +
    user.name.split(" ")[1].charAt(0) +
    user.name.split(" ")[1].slice(1).toLowerCase();
  return (
    <Center>
      <Modal
        isOpen={props.showModal}
        onClose={() => props.setShowModal(false)}
        size="lg"
      >
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Outpass</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <TextBox bold>Name : </TextBox>
                <TextBox>{name}</TextBox>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <TextBox bold>Branch : </TextBox>
                <TextBox>{handleBranchName(user.branch)}</TextBox>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <TextBox bold>Roll No : </TextBox>
                <TextBox>{user.roll_no}</TextBox>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <TextBox bold>Hostel : </TextBox>
                <TextBox>{user.hostel.toUpperCase()}</TextBox>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <TextBox bold>Room No : </TextBox>
                <TextBox>{user.room_no}</TextBox>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <TextBox bold>Phone : </TextBox>
                <TextBox>{user.mobile_no}</TextBox>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <TextBox bold>From Time : </TextBox>
                <TextBox>{props.fromTime}</TextBox>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <TextBox bold>To Time : </TextBox>
                <TextBox>{props.ToTime}</TextBox>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <TextBox bold>Purpose : </TextBox>
                <TextBox>{props.purpose}</TextBox>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer className="items-center justify-center">
            <Button
              class="w-[70vw]"
              text="Confirm"
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

export default OutpassModal;
