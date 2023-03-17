import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import TextBox from "../components/TextBox";
import InputField from "../components/InputField";
import DropDown from "../components/DropDown";
import Button from "../components/Button";
import { createUser, getUser } from "../lib/firebase/user";
import { AuthContext } from "../lib/context/authContext";

const Register = ({ navigation, route }) => {
  const { authDispatch } = React.useContext(AuthContext);
  const [disabled, setDisabled] = React.useState(false);
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [roomValue, setRoomValue] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [hostelValue, setHostelValue] = React.useState("");
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

  const handleRegister = async () => {
    setDisabled(true);
    console.log(roomValue, phoneNumber.replace(/\s+/g, " ").trim());
    if (
      hostelValue == "" ||
      roomValue.trim() == "" ||
      phoneNumber.trim().length < 10
    ) {
      setIsInvalid(true);
    } else {
      try {
        setIsInvalid(false);
        const { id, photo, email, givenName, familyName } = route.params.user;
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
          // },
          // gender: genderValue,
          hostel: hostelValue,
          room_no: parseInt(roomValue),
          // roll_no: rollNoValue,
          mobile_no: parseInt(phoneNumber.trim()),
        };
        const msg = await createUser(id, newUser);
        const user = await getUser(id);
        authDispatch({ type: "NOTIFICATION_TRUE", payload: msg });
        authDispatch({
          type: "SIGN_IN",
          payload: {
            user,
          },
        });
      } catch (err) {
        authDispatch({
          type: "NOTIFICATION_TRUE",
          payload: "Couldn't create user",
        });
        console.log(err);
      } finally {
        setTimeout(() => {
          authDispatch({
            type: "NOTIFICATION_FALSE",
          });
        }, 2000);
      }
    }
    setDisabled(false);
  };

  return (
    <View className="flex-1 m-10">
      <TextBox semibold classNames="text-white mt-10 text-4xl">
        Register
      </TextBox>
      {isInvalid && (
        <TextBox semibold classNames="text-red-500 mt-5">
          Fields marked with * are necessary
        </TextBox>
      )}
      <View className="mt-10">
        <TextBox semibold classNames=" text-white">
          Hostel*
        </TextBox>
        <DropDown
          open={open}
          setOpen={setOpen}
          value={hostelValue}
          items={hostelItems}
          setValue={setHostelValue}
          setItems={setHostelItems}
          placeholder={"Select Hostel"}
        />
      </View>
      <View className="mt-5">
        <TextBox semibold classNames=" text-white">
          Room No.*
        </TextBox>
        <InputField
          placeholder="Enter Room No."
          onValueChange={setRoomValue}
          numeric
        />
      </View>
      {/*  For later don't delete */}

      {/* <View className="mt-5">
        <TextBox semibold    classNames=" text-white">Roll No.</TextBox>
        <InputField
          placeholder="Enter Roll No."
          // onValueChange={setEmail}
        />
      </View> */}
      <View className="mt-5">
        <TextBox semibold classNames=" text-white">
          Phone No.*
        </TextBox>
        <InputField
          placeholder="Enter Phone No."
          onValueChange={setPhoneNumber}
          numeric
        />
      </View>
      <Button
        classNames="mt-10 bg-[#0181ef]"
        onPress={handleRegister}
        disabled={disabled}
      >
        {disabled ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <TextBox semibold classNames="text-white text-xl">
            Let's Go
          </TextBox>
        )}
      </Button>
    </View>
  );
};

export default Register;
