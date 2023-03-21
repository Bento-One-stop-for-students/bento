import React from "react";

import { Modal ***REMOVED*** from "native-base";

import TextBox from "./TextBox";

const NetworkErrorModal = (props) => {
  return (
    <Modal
      isOpen={props.isOpen ? true : false***REMOVED***
      onClose={() => {
        props.onClose(false);
  ***REMOVED******REMOVED***
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
***REMOVED***

export default NetworkErrorModal;
