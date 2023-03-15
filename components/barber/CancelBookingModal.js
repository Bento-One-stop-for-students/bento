import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { Modal } from "native-base";
import TextBox from "../TextBox";
import Button from "../Button";
import { AuthContext } from "../../lib/context/authContext";
import { deleteBarberBooking } from "../../lib/firebase/barber";

const CancelBookingModal = (props) => {
  const [disabled, setDisabled] = React.useState(false);
  const { authState, authDispatch } = React.useContext(AuthContext);

  const handleCancelOrder = async () => {
    try {
      setDisabled(true);
      await deleteBarberBooking(authState.user.id);
      authDispatch({ type: "NOTIFICATION_TRUE", payload: "Booking Cancelled" });
    } catch (err) {
      authDispatch({
        type: "NOTIFICATION_TRUE",
        payload: "Network Error. Try again later",
      });
    } finally {
      setTimeout(() => {
        authDispatch({ type: "NOTIFICATION_FALSE" });
      }, 2000);
      setDisabled(false);
      props.onClose(false);
    }
  };
  return (
    <Modal
      isOpen={props.isOpen ? true : false}
      onClose={() => {
        props.onClose(false);
      }}
      animationPreset="slide"
    >
      <Modal.Content className="bg-[#AE78D3] rounded-3xl p-2">
        <Modal.CloseButton />
        <Modal.Body>
          <TextBox semibold classNames="text-black text-lg">
            Are you sure?
          </TextBox>
        </Modal.Body>
        <Button
          classNames="bg-[#1e1b1b] items-center justify-center"
          onPress={handleCancelOrder}
        >
          {disabled ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <TextBox semibold classNames="text-white">
              Remove from queue
            </TextBox>
          )}
        </Button>
      </Modal.Content>
    </Modal>
  );
};

export default CancelBookingModal;
