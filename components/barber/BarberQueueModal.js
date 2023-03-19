import React from "react";

import { Modal } from "native-base";
import { View, ActivityIndicator } from "react-native";

import Button from "../Button";
import TextBox from "../TextBox";
import { bookBarber } from "../../lib/firebase/barber";
import { AuthContext } from "../../lib/context/authContext";
import messaging from "@react-native-firebase/messaging";

// Notification permissions

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization status:", authStatus);
  }
}

const BarberQueueModal = (props) => {
  const { authState, authDispatch } = React.useContext(AuthContext);
  const [disabled, setDisabled] = React.useState(false);

  const handleBarberQueue = async () => {
    try {
      setDisabled(true);
      await requestUserPermission();
      const token = await messaging().getToken();
      console.log(token);
      await bookBarber(authState.user.id, { fcm_token: token });
      authDispatch({ type: "NOTIFICATION_TRUE", payload: "Added to queue" });
    } catch (err) {
      console.log(err);
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
      isOpen={props.isOpen}
      onClose={() => {
        props.onClose(false);
      }}
      size="lg"
      animationPreset="slide"
      closeOnOverlayClick={true}
    >
      <Modal.Content className="bg-[#AE78D3] rounded-3xl">
        <Modal.Body>
          <Modal.CloseButton />
          <TextBox semibold classNames="text-primary-black text-xl">
            Barber Queue
          </TextBox>
          <View className="border  rounded-xl p-2 mt-1">
            <TextBox semibold classNames="text-primary-black">
              You will recieve notifications when you are up in the queue.
            </TextBox>
            <TextBox semibold classNames="text-primary-black mt-2">
              Your token number is not queue number.
            </TextBox>
          </View>
          <Button
            classNames={`rounded-2xl bg-primary-black items-center justify-center mt-3 ${
              disabled && "opacity-50"
            }`}
            onPress={handleBarberQueue}
            disabled={disabled}
          >
            {disabled ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <TextBox semibold classNames="text-white">
                Agree & Queue
              </TextBox>
            )}
          </Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default BarberQueueModal;
