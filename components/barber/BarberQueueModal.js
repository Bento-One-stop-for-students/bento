import React from "react";

import { Modal ***REMOVED*** from "native-base";
import { ActivityIndicator ***REMOVED*** from "react-native";

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

  if (enabled) {
    console.log("Authorization status:", authStatus);
***REMOVED***
***REMOVED***

const BarberQueueModal = (props) => {
  const { authState, authDispatch ***REMOVED*** = React.useContext(AuthContext);
  const [disabled, setDisabled] = React.useState(false);

  const handleBarberQueue = async () => {
  ***REMOVED***
      setDisabled(true);
      if (requestUserPermission()) {
        const token = await messaging().getToken();
        console.log(token);
        const res = await bookBarber(authState.user.id, { fcmToken: token ***REMOVED***
  ***REMOVED*** type: "NOTIFICATION_TRUE", payload: res ***REMOVED***
  ***REMOVED***
***REMOVED*** catch (err) {
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
          <TextBox semibold classNames="text-[#1e1b1b] text-xl">
            Barber Queue
          </TextBox>
          <TextBox semibold classNames="text-[#1e1b1b] text-xs">
            You can queue between 9:00am to 6:00pm.
          </TextBox>
          <TextBox semibold classNames="text-[#1e1b1b] text-xs mt-2">
            The app is still in testing phase, problems are rare but can occur.
          </TextBox>
          <TextBox semibold classNames="text-[#1e1b1b] text-xs mt-2">
            Your token number is not your queue number.
          </TextBox>
          <TextBox semibold classNames="text-[#1e1b1b] text-xs mt-2">
            You will recieve notifications when 4,3 & 2 people are above you.
          </TextBox>
          <Button
            classNames={`rounded-2xl bg-[#1e1b1b] items-center justify-center mt-3 ${
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
