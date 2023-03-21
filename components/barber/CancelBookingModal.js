import React from "react";

import { Modal ***REMOVED*** from "native-base";
import { ActivityIndicator ***REMOVED*** from "react-native";

import Button from "../Button";
import TextBox from "../TextBox";
import { AuthContext ***REMOVED*** from "../../lib/context/authContext";
import { deleteBarberBooking ***REMOVED*** from "../../lib/firebase/barber";

const CancelBookingModal = (props) => {
  const [disabled, setDisabled] = React.useState(false);
  const { authState, authDispatch ***REMOVED*** = React.useContext(AuthContext);

  const handleCancelBooking = async () => {
  ***REMOVED***
      setDisabled(true);
      await deleteBarberBooking(authState.user.id);
***REMOVED***
        type: "NOTIFICATION_TRUE",
        payload: "Removed from queue",
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
      isOpen={props.isOpen ? true : false***REMOVED***
      onClose={() => {
        props.onClose(false);
  ***REMOVED******REMOVED***
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
      ***REMOVED***`***REMOVED***
          onPress={handleCancelBooking***REMOVED***
        >
          {disabled ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <TextBox semibold classNames="text-white">
              Remove from queue
            </TextBox>
          )***REMOVED***
        </Button>
      </Modal.Content>
    </Modal>
  );
***REMOVED***

export default CancelBookingModal;
