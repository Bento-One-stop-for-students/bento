import React from "react";

import { Modal } from "native-base";

import TextBox from "../TextBox";
import InputField from "../InputField";
import { editUser, getUser } from "../../lib/firebase/user";
import Button from "../Button";
import DropDown from "../DropDown";
import { ActivityIndicator } from "react-native";
import { AuthContext } from "../../lib/context/authContext";
import OverLayNotificationModal from "../OverLayNotificationModal";

const EditUserModal = (props) => {
  const { authState, authDispatch } = React.useContext(AuthContext);
  const toBeEditedValue = Object.keys(props.editedValue)[0];
  const editedValueToSend = props.editedValue[toBeEditedValue];
  const [open, setOpen] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [newValue, setNewValue] = React.useState("");
  const [hostelItems, setHostelItems] = React.useState([
    { label: "MBH-A", value: "MBH-A" },
    { label: "MBH-B", value: "MBH-B" },
    { label: "MBH-F", value: "MBH-F" },
    { label: "BH-1", value: "BH-1" },
    { label: "BH-2", value: "BH-2" },
    { label: "BH-3", value: "BH-3" },
    { label: "BH-4", value: "BH-4" },
    { label: "BH-5", value: "BH-5" },
    { label: "BH-6", value: "BH-6" },
    { label: "BH-7", value: "BH-7" },
    // { label: "GH-1", value: "GH-1" },
    // { label: "GH-2", value: "GH-2" },
    // { label: "MGH", value: "MGH" },
  ]);

  const handleEdit = async () => {
    try {
      setDisabled(true);
      if (toBeEditedValue == "Mobile No") {
        if (newValue.length !== 10) {
          authDispatch({
            type: "NOTIFICATION_TRUE",
            payload: "Invalid Mobile No.",
          });
          return;
        }
      }
      const editedUser = {};
      editedUser[editedValueToSend] = newValue;
      await editUser(authState.user.id, editedUser);
      const user = await getUser(authState.user.id);
      authDispatch({
        type: "UPDATE_USER",
        payload: { user, msg: `Updated ${toBeEditedValue}` },
      });
    } catch (err) {
      authDispatch({
        type: "NOTIFICATION_TRUE",
        payload: "Couldn't update user",
      });
      console.log(err);
    } finally {
      setDisabled(false);
      setTimeout(() => {
        authDispatch({ type: "NOTIFICATION_FALSE" });
      }, 2000);
      props.onClose(false);
    }
  };
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={() => props.onClose(false)}
      size="lg"
      overlayVisible={false}
      animationPreset="slide"
    >
      <Modal.Content>
        <Modal.Header>
          <TextBox semibold classNames="text-lg">
            Edit {toBeEditedValue}
          </TextBox>
        </Modal.Header>
        <Modal.CloseButton />
        <Modal.Body>
          <TextBox>{toBeEditedValue}</TextBox>
          {toBeEditedValue == "Hostel" ? (
            <DropDown
              open={open}
              setOpen={setOpen}
              value={newValue}
              items={hostelItems}
              setValue={setNewValue}
              setItems={setHostelItems}
              placeholder={"Select Hostel"}
            />
          ) : (
            <InputField
              numeric
              placeholder={`Enter ${toBeEditedValue}`}
              onValueChange={setNewValue}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            classNames={`bg-primary-black ${disabled && "opacity-50"}`}
            onPress={handleEdit}
            disabled={disabled}
          >
            {disabled ? (
              <ActivityIndicator size="large" color="#353232" />
            ) : (
              <TextBox semibold classNames="text-white">
                Save
              </TextBox>
            )}
          </Button>
        </Modal.Footer>
      </Modal.Content>
      <OverLayNotificationModal />
    </Modal>
  );
};

export default EditUserModal;
