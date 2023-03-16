import React from "react";
import { Modal } from "native-base";
import TextBox from "./TextBox";

const NetworkErrorModal = (props) => {
  return (
    <Modal
      isOpen={props.isOpen ? true : false}
      onClose={() => {
        props.onClose(false);
      }}
      animationPreset="slide"
    >
      <Modal.Content className="rounded-3xl p-5">
        <Modal.CloseButton />
        <Modal.Body>
          <TextBox semibold classNames="text-black text-lg">
            No internet Connection!
          </TextBox>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default NetworkErrorModal;
