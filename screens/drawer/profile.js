import React from "react";

import { Feather } from "@expo/vector-icons";
import { View, Image, TouchableHighlight, Pressable } from "react-native";

import TextBox from "../../components/TextBox";
import { AuthContext } from "../../lib/context/authContext";
import EditUserModal from "../../components/profile/EditUserModal";

const Profile = ({ navigation }) => {
  const { authState } = React.useContext(AuthContext);
  const [editedValue, setEditedValue] = React.useState("");
  const [openEditModal, setOpenEditModal] = React.useState(false);

  return (
    <View className="flex-1 items-center justify-start">
      <TextBox
        semibold
        classNames="text-[#353232] text-[110px] w-[200vw] text-center absolute"
        style={{ includeFontPadding: false, lineHeight: 150 }}
      >
        BENTO
      </TextBox>
      <View className="flex-row items-center justify-between w-full mt-16 px-10">
        <TextBox semibold classNames="text-white text-3xl">
          Profile
        </TextBox>
        <TouchableHighlight
          onPress={() => {
            navigation.openDrawer();
          }}
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
                authState.user.img
                  ? { uri: authState.user.img }
                  : require("../../assets/images/user.png")
              }
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
            {authState.user.name && authState.user.name}
          </TextBox>
        </View>
        {/* Do not remove , for later purpose */}
        {/* <View className="w-full mt-2">
          <TextBox semibold   classNames="text-white">
            Branch
          </TextBox>
          <TextBox semibold   classNames="text-[#CCC] text-lg">
            {authState.user.branch.toUpperCase()}
          </TextBox>
        </View> */}
        <View className="w-full mt-2">
          <TextBox semibold classNames="text-white">
            Email
          </TextBox>
          <TextBox semibold classNames="text-[#CCC] text-lg">
            {authState.user.email && authState.user.email}
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
                setEditedValue({ Hostel: "hostel" });
                setOpenEditModal(true);
              }}
            >
              <Feather name="edit-2" size={24} color="black" />
            </Pressable>
          </View>
          <TextBox semibold classNames="text-[#CCC] text-lg">
            {authState.user.hostel && authState.user.hostel.toUpperCase()}
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
                setEditedValue({ "Room No": "room_no" });
                setOpenEditModal(true);
              }}
            >
              <Feather name="edit-2" size={24} color="black" />
            </Pressable>
          </View>
          <TextBox semibold classNames="text-[#CCC] text-lg">
            {authState.user.room_no && authState.user.room_no}
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
                setEditedValue({ "Mobile No": "mobile_no" });
                setOpenEditModal(true);
              }}
            >
              <Feather name="edit-2" size={24} color="black" />
            </Pressable>
          </View>
          <TextBox semibold classNames="text-[#CCC] text-lg">
            {authState.user.mobile_no && authState.user.mobile_no}
          </TextBox>
        </View>
        <View className="w-full items-center justify-center">
          <TextBox semibold classNames="text-[#CCCCCC] text-[8px] ">
            Name cannot be changed as it is fetched from email
          </TextBox>
        </View>
      </View>
      <EditUserModal
        isOpen={openEditModal}
        onClose={setOpenEditModal}
        editedValue={editedValue}
        id={authState.user.id}
      />
    </View>
  );
};

export default Profile;
