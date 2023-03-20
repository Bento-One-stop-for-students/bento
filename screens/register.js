import { View, Text, ActivityIndicator ***REMOVED*** from "react-native";
import React from "react";
import TextBox from "../components/TextBox";
import InputField from "../components/InputField";
import DropDown from "../components/DropDown";
import Button from "../components/Button";
import { createUser, getUser ***REMOVED*** from "../lib/firebase/user";
import { AuthContext ***REMOVED*** from "../lib/context/authContext";

const Register = ({ navigation, route ***REMOVED***) => {
  const { authDispatch ***REMOVED*** = React.useContext(AuthContext);
  const [disabled, setDisabled] = React.useState(false);
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [roomValue, setRoomValue] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [hostelValue, setHostelValue] = React.useState("");
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

  const handleRegister = async () => {
    setDisabled(true);
    if (
      hostelValue == "" ||
      roomValue.trim() == "" ||
      phoneNumber.trim().length !== 10
    ) {
      setIsInvalid(true);
***REMOVED*** else {
    ***REMOVED***
        setIsInvalid(false);
        const { id, photo, email, givenName, familyName ***REMOVED*** = route.params.user;
        // get branch of user
        const splitEmail = email.split(".");
        const branchCode = splitEmail[1];

        const newUser = {
          id: id,
          name:
            givenName.charAt(0) +
            givenName.slice(1).toLowerCase() +
            " " +
            familyName.charAt(0) +
            familyName.slice(1).toLowerCase(),
          email: email,
          img: photo,
          branch: branchCode,
          // club: {
          //   head: false,
          //   name: "",
          // ***REMOVED***,
          // gender: genderValue,
          hostel: hostelValue,
          room_no: parseInt(roomValue),
          // roll_no: rollNoValue,
          mobile_no: parseInt(phoneNumber.trim()),
    ***REMOVED***;
        const msg = await createUser(id, newUser);
        const user = await getUser(id);
  ***REMOVED*** type: "NOTIFICATION_TRUE", payload: msg ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
            user,
      ***REMOVED***,
        ***REMOVED***
  ***REMOVED*** catch (err) {
  ***REMOVED***
          type: "NOTIFICATION_TRUE",
          payload: "Couldn't create user",
        ***REMOVED***
        console.log(err);
  ***REMOVED*** finally {
        setTimeout(() => {
    ***REMOVED***
            type: "NOTIFICATION_FALSE",
          ***REMOVED***
    ***REMOVED***, 2000);
  ***REMOVED***
***REMOVED***
    setDisabled(false);
***REMOVED***;

  return (
    <View className="flex-1 m-10">
      <TextBox semibold classNames="text-white mt-10 text-4xl">
        Register
      </TextBox>
      {isInvalid && (
        <TextBox semibold classNames="text-red-500 mt-5">
          Fields marked with * are necessary
        </TextBox>
      )***REMOVED***
      <View className="mt-10">
        <TextBox semibold classNames=" text-white">
          Hostel*
        </TextBox>
        <DropDown
          open={open***REMOVED***
          setOpen={setOpen***REMOVED***
          value={hostelValue***REMOVED***
          items={hostelItems***REMOVED***
          setValue={setHostelValue***REMOVED***
          setItems={setHostelItems***REMOVED***
          placeholder={"Select Hostel"***REMOVED***
        />
      </View>
      <View className="mt-5">
        <TextBox semibold classNames=" text-white">
          Room No.*
        </TextBox>
        <InputField
          placeholder="Enter Room No."
          onValueChange={setRoomValue***REMOVED***
          numeric
        />
      </View>
      {/*  For later don't delete */***REMOVED***

      {/* <View className="mt-5">
        <TextBox semibold    classNames=" text-white">Roll No.</TextBox>
        <InputField
          placeholder="Enter Roll No."
          // onValueChange={setEmail***REMOVED***
        />
      </View> */***REMOVED***
      <View className="mt-5">
        <TextBox semibold classNames=" text-white">
          Phone No.*
        </TextBox>
        <InputField
          placeholder="Enter Phone No."
          onValueChange={setPhoneNumber***REMOVED***
          numeric
        />
      </View>
      <Button
        classNames="mt-10 bg-[#0181ef]"
        onPress={handleRegister***REMOVED***
        disabled={disabled***REMOVED***
      >
        {disabled ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <TextBox semibold classNames="text-white text-xl">
            Let's Go
          </TextBox>
        )***REMOVED***
      </Button>
    </View>
  );
***REMOVED***

export default Register;
