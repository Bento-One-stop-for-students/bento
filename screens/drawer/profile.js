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
      <TextBox
        semibold
        classNames="text-[#353232] text-[110px] w-[200vw] text-center absolute"
        style={{ includeFontPadding: false, lineHeight: 150 ***REMOVED******REMOVED***
      >
        BENTO
      </TextBox>
      <View className="flex-row items-center justify-between w-full mt-16 px-10">
        <TextBox semibold   classNames="text-white text-3xl">
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
      <View className="mt-10 w-full px-10">
        <View className="w-full items-center">
          <View className="border border-[#CCC] rounded-full">
            <Image
              source={
                authState.user.img !== ""
                  ? { uri: authState.user.img ***REMOVED***
                  : require("../../assets/images/hair_brush.png")
          ***REMOVED***
              className="h-32 w-32 rounded-[200px]"
              resizeMode="cover"
            />
          </View>
        </View>
        <View className="w-full mt-5">
          <TextBox semibold   classNames="text-white">
            Name
          </TextBox>
          <TextBox semibold   classNames="text-[#CCC] text-lg">
            {authState.user.name***REMOVED***
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
          <TextBox semibold   classNames="text-white">
            Email
          </TextBox>
          <TextBox semibold   classNames="text-[#CCC] text-lg">
            {authState.user.email***REMOVED***
          </TextBox>
        </View>
        <View className="w-full mt-2">
          <View className="flex-row w-full justify-between">
            <TextBox semibold   classNames="text-white">
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
          <TextBox semibold   classNames="text-[#CCC] text-lg">
            {authState.user.hostel.toUpperCase()***REMOVED***
          </TextBox>
        </View>
        <View className="w-full mt-2">
          <View className="flex-row w-full justify-between">
            <TextBox semibold   classNames="text-white">
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
          <TextBox semibold   classNames="text-[#CCC] text-lg">
            {authState.user.room_no***REMOVED***
          </TextBox>
        </View>
        <View className="w-full mt-2">
          <View className="flex-row w-full justify-between">
            <TextBox semibold   classNames="text-white">
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
          <TextBox semibold   classNames="text-[#CCC] text-lg">
            {authState.user.mobile_no***REMOVED***
          </TextBox>
        </View>
        <View className="w-full items-center justify-center">
          <TextBox semibold   classNames="text-[#CCCCCC] text-[6px]">
            Name is fetched from institute email and cannot be changed
          </TextBox>
          <TextBox semibold   classNames="text-[#CCCCCC] text-[6px]">
            Changes will take effect in next reload
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
