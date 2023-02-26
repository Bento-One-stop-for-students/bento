import { Modal ***REMOVED*** from "native-base";
import TextBox from "./TextBox";

const ErrorModal = (props) => {
  return (
    <Modal isOpen={props.isOpen***REMOVED*** onClose={()=>{props.onClose(false)***REMOVED******REMOVED*** size={"lg"***REMOVED***>
      <Modal.Content>
        <Modal.CloseButton/>
        <Modal.Header>{props.title***REMOVED***</Modal.Header>
        <Modal.Body>
            <TextBox bold>
                {props.error***REMOVED***
            </TextBox>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
***REMOVED***

export default ErrorModal;
