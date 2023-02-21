import React, { useEffect, useRef, useState ***REMOVED*** from "react";
import { View, Text, TouchableWithoutFeedback, FlatList ***REMOVED*** from "react-native";
import DropDown from "../../components/shared/DropDown";
import { Input ***REMOVED*** from "native-base";
import InputField from "../../components/shared/InputField";
import Button from "../../components/shared/Button";

const Register = ({ navigation, route ***REMOVED***) => {
  const userName =
    route.params.user.additionalUserInfo.profile.name.split(" ")[0];

  const [open, setOpen] = useState(false);
  const [hostelValue, setHostelValue] = useState(null);
  const [hostelItems, setHostelItems] = useState([
    { label: "MBH-A", value: "mbh-a" ***REMOVED***,
    { label: "MBH-B", value: "mbh-b" ***REMOVED***,
    { label: "MBH-F", value: "mbh-f" ***REMOVED***,
    { label: "BH-1", value: "bh-1" ***REMOVED***,
    { label: "BH-2", value: "bh-2" ***REMOVED***,
    { label: "BH-3", value: "bh-3" ***REMOVED***,
    { label: "BH-4", value: "bh-4" ***REMOVED***,
    { label: "BH-5", value: "bh-5" ***REMOVED***,
    { label: "BH-6", value: "bh-6" ***REMOVED***,
    { label: "BH-7", value: "bh-7" ***REMOVED***,
  ]);
  const [genderValue, setGenderValue] = useState(null);
  const [genderItems, setGenderItems] = useState([
    { label: "Male", value: "male" ***REMOVED***,
    { label: "Female", value: "female" ***REMOVED***,
  ]);
  const [roomValue, setRoomValue] = useState(null);
  const [phoneNumber,setPhoneNumber] = useState(null);
  return (
    <TouchableWithoutFeedback
      onPressIn={() => setOpen(true)***REMOVED***
      onPressOut={() => setOpen(false)***REMOVED***
    >
      <View className="flex-1 bg-white justify-center items-center flex-col">
        <Text
          className="text-primary-purple font-bold text-xl  w-full ml-20 "
          style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
        >
          Hi! {userName.charAt(0) + userName.slice(1).toLowerCase()***REMOVED***,
        </Text>
        <Text
          className="text-black font-bold text-xl mb-6 "
          style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
        >
          We need some more details
        </Text>
        <DropDown
          elevation={3***REMOVED***
          open={open***REMOVED***
          value={genderValue***REMOVED***
          items={genderItems***REMOVED***
          setValue={setGenderValue***REMOVED***
          setItems={setGenderItems***REMOVED***
          placeholder={"Select Gender"***REMOVED***
        />
        <DropDown
          elevation={2***REMOVED***
          open={open***REMOVED***
          value={hostelValue***REMOVED***
          items={hostelItems***REMOVED***
          setValue={setHostelValue***REMOVED***
          setItems={setHostelItems***REMOVED***
          placeholder={"Select Hostel"***REMOVED***
        />
        <InputField placeholder="Room No." />
        <InputField placeholder="Mobile No." s/>
        <Button text={"Let's Go"***REMOVED*** />
      </View>
    </TouchableWithoutFeedback>
  );
***REMOVED***

export default Register;
