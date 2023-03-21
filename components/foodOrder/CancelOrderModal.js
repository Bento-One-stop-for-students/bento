import React from "react";

import { Modal ***REMOVED*** from "native-base";
import { ActivityIndicator ***REMOVED*** from "react-native";

import Button from "../Button";
import TextBox from "../TextBox";
import { AuthContext ***REMOVED*** from "../../lib/context/authContext";
import { cancelUserOrder, getUserOrders ***REMOVED*** from "../../lib/firebase/food-order";

const CancelOrderModal = (props) => {
  const [disabled, setDisabled] = React.useState(false);
  const { authState, authDispatch ***REMOVED*** = React.useContext(AuthContext);

  const handleCancelOrder = async () => {
  ***REMOVED***
      setDisabled(true);
      await cancelUserOrder(authState.user.id, props.isOpen);
      const updatedOrders = await getUserOrders(authState.user.id);
***REMOVED*** type: "GET_ORDERS", payload: updatedOrders ***REMOVED***
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
      <Modal.Content className="bg-primary-snackmen  rounded-3xl p-5">
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
          onPress={handleCancelOrder***REMOVED***
          disabled={disabled***REMOVED***
        >
          {disabled ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <TextBox semibold classNames="text-white">
              Cancel Order
            </TextBox>
          )***REMOVED***
        </Button>
      </Modal.Content>
    </Modal>
  );
***REMOVED***

export default CancelOrderModal;
