import React from "react";

import { Modal } from "native-base";
import { ActivityIndicator } from "react-native";

import Button from "../Button";
import TextBox from "../TextBox";
import { AuthContext } from "../../lib/context/authContext";
import { deleteBarberBooking } from "../../lib/firebase/barber";

const CancelBookingModal = (props) => {
  const [disabled, setDisabled] = React.useState(false);
  const { authState, authDispatch } = React.useContext(AuthContext);

  const handleCancelBooking = async () => {
    try {
      setDisabled(true);
      await deleteBarberBooking(authState.user.id);
      authDispatch({
        type: "NOTIFICATION_TRUE",
        payload: "Removed from queue",
      });
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
      <Modal.Content className="bg-[#AE78D3] rounded-3xl p-5">
        <Modal.CloseButton />
        <Modal.Body>
          <TextBox semibold classNames="text-black text-lg">
            Are you sure?
          </TextBox>
        </Modal.Body>
        <Button
          classNames={`bg-primary-black items-center justify-center ${
            disabled && "opacity-50"
          }`}
          onPress={handleCancelBooking}
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
