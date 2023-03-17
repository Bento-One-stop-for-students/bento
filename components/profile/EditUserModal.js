import React from "react";

import { Modal ***REMOVED*** from "native-base";

import TextBox from "../TextBox";
import InputField from "../InputField";
import { editUser, getUser ***REMOVED*** from "../../lib/firebase/user";
import Button from "../Button";
import DropDown from "../DropDown";
import { ActivityIndicator ***REMOVED*** from "react-native";
import { AuthContext ***REMOVED*** from "../../lib/context/authContext";
import OverLayNotificationModal from "../OverLayNotificationModal";

const EditUserModal = (props) => {
  const { authState, authDispatch ***REMOVED*** = React.useContext(AuthContext);
  const toBeEditedValue = Object.keys(props.editedValue)[0];
  const editedValueToSend = props.editedValue[toBeEditedValue];
  const [open, setOpen] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [newValue, setNewValue] = React.useState("");
  const [hostelItems, setHostelItems] = React.useState([
    { label: "MBH-A", value: "MBH-A" ***REMOVED***,
    { label: "MBH-B", value: "MBH-B" ***REMOVED***,
    { label: "MBH-F", value: "MBH-F" ***REMOVED***,
    { label: "BH-1", value: "BH-1" ***REMOVED***,
    { label: "BH-2", value: "BH-2" ***REMOVED***,
    { label: "BH-3", value: "BH-3" ***REMOVED***,
    { label: "BH-4", value: "BH-4" ***REMOVED***,
    { label: "BH-5", value: "BH-5" ***REMOVED***,
    { label: "BH-6", value: "BH-6" ***REMOVED***,
    { label: "BH-7", value: "BH-7" ***REMOVED***,
    // { label: "GH-1", value: "GH-1" ***REMOVED***,
    // { label: "GH-2", value: "GH-2" ***REMOVED***,
    // { label: "MGH", value: "MGH" ***REMOVED***,
  ]);

  const handleEdit = async () => {
  ***REMOVED***
      setDisabled(true);
      if (toBeEditedValue == "Mobile No") {
        {
          if (newValue.length < 10) {
      ***REMOVED***
              type: "NOTIFICATION_TRUE",
              payload: "Invalid Mobile No.",
            ***REMOVED***
            return;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
      const editedUser = {***REMOVED***
      editedUser[editedValueToSend] = newValue;
      await editUser(authState.user.id, editedUser);
      const user = await getUser(authState.user.id);
***REMOVED***
        type: "UPDATE_USER",
***REMOVED*** user, msg: `Updated ${toBeEditedValue***REMOVED***` ***REMOVED***,
      ***REMOVED***
***REMOVED*** catch (err) {
***REMOVED***
        type: "NOTIFICATION_TRUE",
        payload: "Couldn't update user",
      ***REMOVED***
      console.log(err);
***REMOVED*** finally {
      setDisabled(false);
      setTimeout(() => {
  ***REMOVED*** type: "NOTIFICATION_FALSE" ***REMOVED***
  ***REMOVED***, 2000);
      props.onClose(false);
***REMOVED***
***REMOVED***;
  return (
    <Modal
      isOpen={props.isOpen***REMOVED***
      onClose={() => props.onClose(false)***REMOVED***
      size="lg"
      overlayVisible={false***REMOVED***
      animationPreset="slide"
    >
      <Modal.Content>
        <Modal.Header>
          <TextBox semibold classNames="text-lg">
            Edit {toBeEditedValue***REMOVED***
          </TextBox>
        </Modal.Header>
        <Modal.CloseButton />
        <Modal.Body>
          <TextBox>{toBeEditedValue***REMOVED***</TextBox>
          {toBeEditedValue == "Hostel" ? (
            <DropDown
              open={open***REMOVED***
              setOpen={setOpen***REMOVED***
              value={newValue***REMOVED***
              items={hostelItems***REMOVED***
              setValue={setNewValue***REMOVED***
              setItems={setHostelItems***REMOVED***
              placeholder={"Select Hostel"***REMOVED***
            />
          ) : (
            <InputField
              numeric
              placeholder={`Enter ${toBeEditedValue***REMOVED***`***REMOVED***
              onValueChange={setNewValue***REMOVED***
            />
          )***REMOVED***
        </Modal.Body>
        <Modal.Footer>
          <Button
            classNames={`bg-primary-black ${disabled && "opacity-50"***REMOVED***`***REMOVED***
            onPress={handleEdit***REMOVED***
            disabled={disabled***REMOVED***
          >
            {disabled ? (
              <ActivityIndicator size="large" color="#353232" />
            ) : (
              <TextBox semibold classNames="text-white">
                Save
              </TextBox>
            )***REMOVED***
          </Button>
        </Modal.Footer>
      </Modal.Content>
      <OverLayNotificationModal />
    </Modal>
  );
***REMOVED***

export default EditUserModal;
