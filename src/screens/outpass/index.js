import React from "react";
import { View } from "react-native";

import Button from "../../components/shared/styles/Button";
import ViewBox from "../../components/shared/styles/ViewBox";
import TextBox from "../../components/shared/styles/TextBox";
// import ModalBox from "../../components/barber/paymentModal";
import InputField from "../../components/shared/styles/InputField";
import { KeyboardAvoidingView, ScrollView } from "native-base";

const Outpass = () => {
  const [fromTime, setFromTime] = React.useState("");
  const [toTime, setToTime] = React.useState("");
  const [outpassPurpose, setOutpassPurpose] = React.useState("");
  return (
    <KeyboardAvoidingView behavior="height" className="flex-1 ">
        <ViewBox class="flex-1 items-center justify-start py-[5vh] px-[5vh]">
          <ViewBox class="w-full p-4 bg-primary-purple">
            <TextBox class="w-full mb-2 text-[16px] text-white" bold>
              In/Out Guidelines
            </TextBox>
            <TextBox class="w-full my-1 text-white">
              - Students are allowed to go out between 6:00am to 8:00pm
            </TextBox>
            <TextBox class="w-full my-1 text-white ">
              - In case of being late due to uncertain circumstances kindly
              inform the hostel staff.
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
              <InputField
                width={130}
                setValue={setFromTime}
                placeholder="From"
              />
              <InputField width={130} setValue={setToTime} placeholder="To" />
            </View>
            <InputField placeholder="Purpose" setValue={setOutpassPurpose} />
          </ViewBox>
          <Button
            disabled={
              fromTime == "" || toTime == "" || outpassPurpose == ""
                ? true
                : false
            }
            text="Create Outpass"
            //   onPress={() => {
            //     setShowModal(true);
            //   }}
          />
          {/* <ModalBox
      //   showModal={showModal}
      //   setShowModal={setShowModal}
      //   hair={isHairOptionEnabled}
      //   beard={isBeardOptionEnabled}
      //   massage={isMassageOptionEnabled}
      //   total={total}
    /> */}
        </ViewBox>
    </KeyboardAvoidingView>
  );
};

export default Outpass;
