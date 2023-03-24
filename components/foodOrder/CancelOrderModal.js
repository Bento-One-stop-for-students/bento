import React from "react";

import { Modal } from "native-base";
import { ActivityIndicator } from "react-native";

import Button from "../Button";
import TextBox from "../TextBox";
import { AuthContext } from "../../lib/context/authContext";
import { cancelUserOrder, getUserOrders } from "../../lib/firebase/food-order";

const CancelOrderModal = (props) => {
  const [disabled, setDisabled] = React.useState(false);
  const { authState, authDispatch } = React.useContext(AuthContext);

  const handleCancelOrder = async () => {
    try {
      setDisabled(true);
      await cancelUserOrder(authState.user.id, props.isOpen);
      const updatedOrders = await getUserOrders(authState.user.id);
      authDispatch({ type: "GET_ORDERS", payload: updatedOrders });
      authDispatch({ type: "NOTIFICATION_TRUE", payload: "Order Cancelled" });
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
      isOpen={props.isOpen ? true : false}
      onClose={() => {
        props.onClose(false);
      }}
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
          }`}
          onPress={handleCancelOrder}
          disabled={disabled}
        >
          {disabled ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <TextBox semibold classNames="text-white">
              Cancel Order
            </TextBox>
          )}
        </Button>
      </Modal.Content>
    </Modal>
  );
};

export default CancelOrderModal;
