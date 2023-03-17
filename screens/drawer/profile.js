import React from "react";

import { Feather ***REMOVED*** from "@expo/vector-icons";
import { View, Image, TouchableHighlight, Pressable ***REMOVED*** from "react-native";

import TextBox from "../../components/TextBox";
import { AuthContext ***REMOVED*** from "../../lib/context/authContext";
import EditUserModal from "../../components/profile/EditUserModal";

const Profile = ({ navigation ***REMOVED***) => {
  const { authState ***REMOVED*** = React.useContext(AuthContext);
  const [editedValue, setEditedValue] = React.useState("");
  const [openEditModal, setOpenEditModal] = React.useState(false);

  return (
    <View className="flex-1 items-center justify-start">
      <View className="flex-center items-center">
        <TextBox
          semibold
          classNames="text-[#1E1B1B] text-[110px] w-[110vw] text-center"
          style={{
            includeFontPadding: false,
            paddingTop: 100,
            fontFamily: "Poppins_700Bold",
      ***REMOVED******REMOVED***
        >
          BENTO
        </TextBox>
        <View className="flex-row items-center justify-around w-full h-full absolute">
          <TextBox semibold classNames="text-white text-3xl mr-10">
            Profile
          </TextBox>
          <TouchableHighlight
            onPress={() => {
              navigation.openDrawer();
        ***REMOVED******REMOVED***
          >
            <>
              <View className="w-10 h-2 m-1 bg-white" />
              <View className="w-10 h-2 m-1 bg-white" />
              <View className="w-10 h-2 m-1 bg-white" />
            </>
          </TouchableHighlight>
        </View>
      </View>
      <View className="w-full px-10">
        <View className="w-full items-center">
          <View className="border border-[#CCC] rounded-full">
            <Image
              source={
                authState.user.img
                  ? { uri: authState.user.img ***REMOVED***
                  : require("../../assets/images/user.png")
          ***REMOVED***
              className="h-32 w-32 rounded-[200px]"
              resizeMode="contain"
            />
          </View>
        </View>
        <View className="w-full mt-5">
          <TextBox semibold classNames="text-white">
            Name
          </TextBox>
          <TextBox semibold classNames="text-[#CCC] text-lg">
            {authState.user.name && authState.user.name***REMOVED***
          </TextBox>
        </View>
        {/* Do not remove , for later purpose */***REMOVED***
        {/* <View className="w-full mt-2">
          <TextBox semibold   classNames="text-white">
            Branch
          </TextBox>
          <TextBox semibold   classNames="text-[#CCC] text-lg">
            {authState.user.branch.toUpperCase()***REMOVED***
          </TextBox>
        </View> */***REMOVED***
        <View className="w-full mt-2">
          <TextBox semibold classNames="text-white">
            Email
          </TextBox>
          <TextBox semibold classNames="text-[#CCC] text-lg">
            {authState.user.email && authState.user.email***REMOVED***
          </TextBox>
        </View>
        <View className="w-full mt-2">
          <View className="flex-row w-full justify-between">
            <TextBox semibold classNames="text-white">
              Hostel
            </TextBox>
            <Pressable
              className="flex-row bg-[#CCC] rounded-xl p-1"
              onPress={() => {
                setEditedValue({ Hostel: "hostel" ***REMOVED***
                setOpenEditModal(true);
          ***REMOVED******REMOVED***
            >
              <Feather name="edit-2" size={24***REMOVED*** color="black" />
            </Pressable>
          </View>
          <TextBox semibold classNames="text-[#CCC] text-lg">
            {authState.user.hostel && authState.user.hostel.toUpperCase()***REMOVED***
          </TextBox>
        </View>
        <View className="w-full mt-2">
          <View className="flex-row w-full justify-between">
            <TextBox semibold classNames="text-white">
              Room No
            </TextBox>
            <Pressable
              className="flex-row bg-[#CCC] rounded-xl p-1"
              onPress={() => {
                setEditedValue({ "Room No": "room_no" ***REMOVED***
                setOpenEditModal(true);
          ***REMOVED******REMOVED***
            >
              <Feather name="edit-2" size={24***REMOVED*** color="black" />
            </Pressable>
          </View>
          <TextBox semibold classNames="text-[#CCC] text-lg">
            {authState.user.room_no && authState.user.room_no***REMOVED***
          </TextBox>
        </View>
        <View className="w-full mt-2">
          <View className="flex-row w-full justify-between">
            <TextBox semibold classNames="text-white">
              Mobile No
            </TextBox>
            <Pressable
              className="flex-row bg-[#CCC] rounded-xl p-1"
              onPress={() => {
                setEditedValue({ "Mobile No": "mobile_no" ***REMOVED***
                setOpenEditModal(true);
          ***REMOVED******REMOVED***
            >
              <Feather name="edit-2" size={24***REMOVED*** color="black" />
            </Pressable>
          </View>
          <TextBox semibold classNames="text-[#CCC] text-lg">
            {authState.user.mobile_no && authState.user.mobile_no***REMOVED***
          </TextBox>
        </View>
        <View className="w-full items-center justify-center">
          <TextBox semibold classNames="text-[#CCCCCC] text-[8px] ">
            Name cannot be changed as it is fetched from email
          </TextBox>
        </View>
      </View>
      <EditUserModal
        isOpen={openEditModal***REMOVED***
        onClose={setOpenEditModal***REMOVED***
        editedValue={editedValue***REMOVED***
        id={authState.user.id***REMOVED***
      />
    </View>
  );
***REMOVED***

export default Profile;
