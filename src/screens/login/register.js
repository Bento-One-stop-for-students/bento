import React from "react";
import Button from "../../components/shared/styles/Button";
import { AuthContext ***REMOVED*** from "../../../hooks/context";
import DropDown from "../../components/shared/styles/DropDown";
import InputField from "../../components/shared/styles/InputField";
import { View, Text, TouchableWithoutFeedback, Alert ***REMOVED*** from "react-native";
import { createUser ***REMOVED*** from "../../../lib/firebase/User";
import { checkValidInputs ***REMOVED*** from "../../../hooks/validators";

const Register = ({ navigation, route ***REMOVED***) => {
  const { googleUser, setIsLoggedIn, setUser ***REMOVED*** = React.useContext(AuthContext);

  const { id, givenName, photo, email, name ***REMOVED*** = googleUser;
  const splitEmail = email.split(".");

  const branchCode = splitEmail[1];
  const userName = givenName;

  const [open, setOpen] = React.useState(false);
  const [hostelValue, setHostelValue] = React.useState("");
  const [hostelItems, setHostelItems] = React.useState([
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
    { label: "GH-1", value: "gh-1" ***REMOVED***,
    { label: "GH-2", value: "gh-2" ***REMOVED***,
    { label: "MGH", value: "mgh" ***REMOVED***,
  ]);
  const [genderValue, setGenderValue] = React.useState("");
  const [genderItems, setGenderItems] = React.useState([
    { label: "Male", value: "male" ***REMOVED***,
    { label: "Female", value: "female" ***REMOVED***,
  ]);
  const [roomValue, setRoomValue] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [rollNoValue, setRollNoValue] = React.useState("");

  const newUser = {
    id: id,
    name: name,
    email: email,
    img: photo,
    branch: branchCode,
    club: {
      head: false,
      name: "",
***REMOVED***,
    gender: genderValue,
    hostel: hostelValue,
    room_no: roomValue,
    roll_no: rollNoValue,
    mobile_no: phoneNumber,
***REMOVED***;

  const handleRegister = () => {
    if (
      checkValidInputs(
        hostelValue,
        genderValue,
        roomValue,
        phoneNumber,
        rollNoValue
      )
    ) {
      const res = createUser(newUser, id);
  ***REMOVED***
        setIsLoggedIn(true);
        setUser(newUser);
        console.log(res);
  ***REMOVED*** else {
        Alert.alert("Some error occured. Try again later.");
  ***REMOVED***
***REMOVED*** else {
      Alert.alert("Error", "Invalid input");
***REMOVED***
***REMOVED***;

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
        <InputField placeholder="Roll No." setValue={setRollNoValue***REMOVED*** />
        <InputField placeholder="Room No." setValue={setRoomValue***REMOVED*** />
        <InputField placeholder="Mobile No." setValue={setPhoneNumber***REMOVED*** />
        <Button text={"Let's Go"***REMOVED*** onPress={handleRegister***REMOVED*** />
      </View>
    </TouchableWithoutFeedback>
  );
***REMOVED***

export default Register;
