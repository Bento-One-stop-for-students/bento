import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import DropDown from "../../components/shared/DropDown";
import InputField from "../../components/shared/InputField";
import Button from "../../components/shared/Button";

const Register = ({ navigation, route }) => {
  const userName =
    route.params.user.additionalUserInfo.profile.name.split(" ")[0];

  const [open, setOpen] = React.useState(false);
  const [hostelValue, setHostelValue] = React.useState(null);
  const [hostelItems, setHostelItems] = React.useState([
    { label: "MBH-A", value: "mbh-a" },
    { label: "MBH-B", value: "mbh-b" },
    { label: "MBH-F", value: "mbh-f" },
    { label: "BH-1", value: "bh-1" },
    { label: "BH-2", value: "bh-2" },
    { label: "BH-3", value: "bh-3" },
    { label: "BH-4", value: "bh-4" },
    { label: "BH-5", value: "bh-5" },
    { label: "BH-6", value: "bh-6" },
    { label: "BH-7", value: "bh-7" },
  ]);
  const [genderValue, setGenderValue] = React.useState(null);
  const [genderItems, setGenderItems] = React.useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);
  const [roomValue, setRoomValue] = React.useState(null);
  const [phoneNumber,setPhoneNumber] = React.useState(null);
  return (
    <TouchableWithoutFeedback
      onPressIn={() => setOpen(true)}
      onPressOut={() => setOpen(false)}
    >
      <View className="flex-1 bg-white justify-center items-center flex-col">
        <Text
          className="text-primary-purple font-bold text-xl  w-full ml-20 "
          style={{ fontFamily: "Lato_700Bold" }}
        >
          Hi! {userName.charAt(0) + userName.slice(1).toLowerCase()},
        </Text>
        <Text
          className="text-black font-bold text-xl mb-6 "
          style={{ fontFamily: "Lato_700Bold" }}
        >
          We need some more details
        </Text>
        <DropDown
          elevation={3}
          open={open}
          value={genderValue}
          items={genderItems}
          setValue={setGenderValue}
          setItems={setGenderItems}
          placeholder={"Select Gender"}
        />
        <DropDown
          elevation={2}
          open={open}
          value={hostelValue}
          items={hostelItems}
          setValue={setHostelValue}
          setItems={setHostelItems}
          placeholder={"Select Hostel"}
        />
        <InputField placeholder="Room No." />
        <InputField placeholder="Mobile No." />
        <Button text={"Let's Go"} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
