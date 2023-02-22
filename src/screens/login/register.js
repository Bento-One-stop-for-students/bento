import React from "react";
import Button from "../../components/shared/Button";
import { AuthContext } from "../../../hooks/context";
import DropDown from "../../components/shared/DropDown";
import InputField from "../../components/shared/InputField";
import { View, Text, TouchableWithoutFeedback, Alert } from "react-native";
import { createUser } from "../../../lib/firebase/User";
import { checkValidInputs } from "../../../hooks/validators";

const Register = ({ navigation, route }) => {
  const { googleUser, setIsLoggedIn, setUser } = React.useContext(AuthContext);

  const { id, givenName, photo, email, name } = googleUser;
  const splitEmail = email.split(".");

  const branchCode = splitEmail[1];
  const userName = givenName;

  const [open, setOpen] = React.useState(false);
  const [hostelValue, setHostelValue] = React.useState("");
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
    { label: "GH-1", value: "gh-1" },
    { label: "GH-2", value: "gh-2" },
    { label: "MGH", value: "mgh" },
  ]);
  const [genderValue, setGenderValue] = React.useState("");
  const [genderItems, setGenderItems] = React.useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);
  const [roomValue, setRoomValue] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [rollNoValue, setRollNoValue] = React.useState("");

  const newUser = {
    name: name,
    email: email,
    img: photo,
    branch: branchCode,
    club: {
      head: false,
      name: "",
    },
    gender: genderValue,
    hostel: hostelValue,
    room_no: roomValue,
    roll_no: rollNoValue,
    mobile_no: phoneNumber,
  };

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
      if (res) {
        setIsLoggedIn(true);
        setUser(newUser);
        console.log(res);
      } else {
        Alert.alert("Some error occured. Try again later.");
      }
    } else {
      Alert.alert("Error", "Invalid input");
    }
  };

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
        <InputField placeholder="Roll No." setValue={setRollNoValue} />
        <InputField placeholder="Room No." setValue={setRoomValue} />
        <InputField placeholder="Mobile No." setValue={setPhoneNumber} />
        <Button text={"Let's Go"} fun={handleRegister} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
