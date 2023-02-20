import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableWithoutFeedback, FlatList } from "react-native";
import DropDown from "../../components/shared/DropDown";
import { Input } from "native-base";
import InputField from "../../components/shared/InputField";

const Register = ({ navigation, route }) => {
  const [open, setOpen] = useState(false);
  const [hostelValue, setHostelValue] = useState(null);
  const [hostelItems, setHostelItems] = useState([
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
  const [genderValue, setGenderValue] = useState(null);
  const [genderItems, setGenderItems] = useState([
    { label: "male", value: "male" },
    { label: "female", value: "female" },
  ]);
  return (
    <TouchableWithoutFeedback
      onPressIn={() => setOpen(true)}
      onPressOut={() => setOpen(false)}
    >
      <View className="flex-1 bg-white justify-center items-center flex-col">
        <Text
          className="text-black font-bold text-xl mb-14 "
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
        <InputField placeholder="Room No."/>
        <InputField placeholder="Mobile No."/>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
