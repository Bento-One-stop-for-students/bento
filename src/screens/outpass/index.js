import React from "react";
import { View ***REMOVED*** from "react-native";

import Button from "../../components/shared/styles/Button";
import ViewBox from "../../components/shared/styles/ViewBox";
import TextBox from "../../components/shared/styles/TextBox";
// import ModalBox from "../../components/barber/paymentModal";
import InputField from "../../components/shared/styles/InputField";
import { KeyboardAvoidingView, ScrollView ***REMOVED*** from "native-base";
import OutpassModal from "../../components/outpass/outpassModal";

const Outpass = () => {
  const [showModal, setShowModal] = React.useState(true);

  const [toTime, setToTime] = React.useState("");
  const [fromTime, setFromTime] = React.useState("");
  const [outpassPurpose, setOutpassPurpose] = React.useState("");
  return (
    <KeyboardAvoidingView behavior="position" className="flex-1 bg-white">
      <View className=" items-center justify-between py-[5vh] px-[5vh] bg-white">
        <ViewBox class="w-full p-4 bg-primary-purple">
          <TextBox class="w-full mb-2 text-[16px] text-white" bold>
            In/Out Guidelines
          </TextBox>
          <TextBox class="w-full my-1 text-white">
            - Students are allowed to go out between 6:00am to 8:00pm
          </TextBox>
          <TextBox class="w-full my-1 text-white ">
            - In case of being late due to uncertain circumstances kindly inform
            the hostel staff.
          </TextBox>
          <TextBox class="w-full my-1 text-white   ">
            - Pass can be made for the same day only.
          </TextBox>
          <TextBox class="w-full my-1 text-white ">
            - You will need to verify the pass at main gate
          </TextBox>
        </ViewBox>
        <ViewBox class="my-5 p-5 w-full">
          <TextBox
            class="w-full p-2 px-4 text-[16px] text-primary-purple items-center justify-end "
            bold
          >
            Form
          </TextBox>
          <View className="flex-row w-full items-center justify-evenly">
            <InputField width={130***REMOVED*** setValue={setFromTime***REMOVED*** placeholder="From" />
            <InputField width={130***REMOVED*** setValue={setToTime***REMOVED*** placeholder="To" />
          </View>
          <InputField placeholder="Purpose" setValue={setOutpassPurpose***REMOVED*** />
        </ViewBox>
        <Button
          disabled={
            fromTime == "" || toTime == "" || outpassPurpose == ""
              ? true
              : false
      ***REMOVED***
          text="Create Outpass"
          onPress={() => {
            setShowModal(true);
      ***REMOVED******REMOVED***
        />
        <OutpassModal showModal={showModal***REMOVED*** setShowModal={setShowModal***REMOVED*** />
      </View>
    </KeyboardAvoidingView>
  );
***REMOVED***

export default Outpass;
