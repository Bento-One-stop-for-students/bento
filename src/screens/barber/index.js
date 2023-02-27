import React from "react";
import Button from "../../components/shared/styles/Button";
import ViewBox from "../../components/shared/styles/ViewBox";
import TextBox from "../../components/shared/styles/TextBox";
import SwitchBox from "../../components/shared/styles/SwitchBox";
import { ScrollView } from "react-native-gesture-handler";
import BarberModal from "../../components/barber/paymentModal";

const Barber = () => {
  const [isHairOptionEnabled, setIsHairOptionEnabled] = React.useState(false);
  const [isBeardOptionEnabled, setIsBeardOptionEnabled] = React.useState(false);
  const [isMassageOptionEnabled, setIsMassageOptionEnabled] =
    React.useState(false);
  const [total, setTotal] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    setTotal(
      (isHairOptionEnabled ? 70 : 0) +
        (isBeardOptionEnabled ? 30 : 0) +
        (isMassageOptionEnabled ? 40 : 0)
    );
  }, [isHairOptionEnabled, isBeardOptionEnabled, isMassageOptionEnabled]);
  return (
    <ScrollView>
      <ViewBox class="flex-1 items-center justify-start px-[5vh]">
        <TextBox class="w-full mb-1 text-lg text-primary-purple" bold>
          Description
        </TextBox>
        <ViewBox class="w-full p-4 mb-5">
          <TextBox class="w-full my-1">
            Booking Timings : 9:00 am to 6:00pm
          </TextBox>
          <TextBox class="w-full my-1 ">
            Expected waiting time may vary based on bookings and barber
          </TextBox>
          <TextBox class="w-full my-1 text-red-600 ">
            EWT may increase or decrease if barber is on lunch break (top
            indicator shows barber status)
          </TextBox>
          <TextBox class="w-full my-1 ">
            You will get notification 30 min before your appointment
          </TextBox>
          <TextBox class="w-full my-1 " bold>
            Pricing :
          </TextBox>
          <TextBox class="w-full px-12">Hair : 70 Rs</TextBox>
          <TextBox class="w-full px-12">Beard : 30 Rs</TextBox>
          <TextBox class="w-full px-12">Massage : 40 Rs</TextBox>
        </ViewBox>
        <TextBox class="w-full mb-1 text-lg text-primary-purple" bold>
          Select Services
        </TextBox>
        <ViewBox class="w-full p-4 mb-5 px-16">
          <SwitchBox
            text="Hair"
            value={isHairOptionEnabled}
            onValueChange={setIsHairOptionEnabled}
          />
          <SwitchBox
            text="Beard"
            value={isBeardOptionEnabled}
            onValueChange={setIsBeardOptionEnabled}
          />
          <SwitchBox
            text="Massage"
            value={isMassageOptionEnabled}
            onValueChange={setIsMassageOptionEnabled}
          />
        </ViewBox>
        <TextBox class="w-full mb-1 text-lg text-primary-purple" bold>
          Checkout
        </TextBox>
        <ViewBox class="w-full p-4 mb-5 flex-row items-center justify-between px-16">
          <TextBox bold>Total :</TextBox>
          <TextBox>{total} Rs</TextBox>
        </ViewBox>
        <Button
          disabled={total ? false : true}
          text="Create Appointment"
          onPress={() => {
            setShowModal(true);
          }}
        />
        <BarberModal
          showModal={showModal}
          setShowModal={setShowModal}
          hair={isHairOptionEnabled}
          beard={isBeardOptionEnabled}
          massage={isMassageOptionEnabled}
          total={total}
        />
      </ViewBox>
    </ScrollView>
  );
};

export default Barber;
