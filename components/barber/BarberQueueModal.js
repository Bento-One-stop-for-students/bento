import React from "react";

import { Modal ***REMOVED*** from "native-base";
import { View, ActivityIndicator ***REMOVED*** from "react-native";

import Button from "../Button";
import TextBox from "../TextBox";
import { bookBarber ***REMOVED*** from "../../lib/firebase/barber";
import { AuthContext ***REMOVED*** from "../../lib/context/authContext";
import messaging from "@react-native-firebase/messaging";

// Notification permissions

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
***REMOVED***

const BarberQueueModal = (props) => {
  const { authState, authDispatch ***REMOVED*** = React.useContext(AuthContext);
  const [disabled, setDisabled] = React.useState(false);

  const handleBarberQueue = async () => {
  ***REMOVED***
      setDisabled(true);
      await requestUserPermission();
      const token = await messaging().getToken();
      await bookBarber(authState.user.id, { fcm_token: token ***REMOVED***
***REMOVED*** type: "NOTIFICATION_TRUE", payload: "Added to queue" ***REMOVED***
***REMOVED*** catch (err) {
      console.log(err);
***REMOVED***
        type: "NOTIFICATION_TRUE",
        payload: "Network Error. Try again later",
      ***REMOVED***
***REMOVED*** finally {
      setTimeout(() => {
  ***REMOVED*** type: "NOTIFICATION_FALSE" ***REMOVED***
  ***REMOVED***, 2000);
      setDisabled(false);
      props.onClose(false);
***REMOVED***
***REMOVED***;

  return (
    <Modal
      isOpen={props.isOpen***REMOVED***
      onClose={() => {
        props.onClose(false);
  ***REMOVED******REMOVED***
      size="lg"
      animationPreset="slide"
      closeOnOverlayClick={true***REMOVED***
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
        ***REMOVED***`***REMOVED***
            onPress={handleBarberQueue***REMOVED***
            disabled={disabled***REMOVED***
          >
            {disabled ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <TextBox semibold classNames="text-white">
                Agree & Queue
              </TextBox>
            )***REMOVED***
          </Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
***REMOVED***

export default BarberQueueModal;
