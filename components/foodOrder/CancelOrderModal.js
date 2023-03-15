import { View, Text, ActivityIndicator ***REMOVED*** from "react-native";
import React from "react";
import { Modal ***REMOVED*** from "native-base";
import TextBox from "../TextBox";
import Button from "../Button";
import { AuthContext ***REMOVED*** from "../../lib/context/authContext";

const CancelOrderModal = (props) => {
  const [disabled, setDisabled] = React.useState(false);
  const { authDispatch ***REMOVED*** = React.useContext(AuthContext);
  const handleCancelOrder = async () => {
  ***REMOVED***
      setDisabled(true);
***REMOVED*** type: "NOTIFICATION_TRUE", payload: "Order Cancelled" ***REMOVED***
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
      <Modal.Content className="bg-[#FFA410] rounded-3xl p-2">
        <Modal.CloseButton />
        <Modal.Body>
          <TextBox semibold classNames="text-black text-lg">Are you sure?</TextBox>
        </Modal.Body>
        <Button
          classNames="bg-[#1e1b1b] items-center justify-center"
          onPress={handleCancelOrder***REMOVED***
        >
          {disabled ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <TextBox semibold   classNames="text-white">
              Cancel Order
            </TextBox>
          )***REMOVED***
        </Button>
      </Modal.Content>
    </Modal>
  );
***REMOVED***

export default CancelOrderModal;
