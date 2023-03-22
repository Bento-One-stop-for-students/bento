import React from "react";

import { Feather } from "@expo/vector-icons";
import { View, Image, Pressable } from "react-native";

import TextBox from "../../components/TextBox";
import { AuthContext } from "../../lib/context/authContext";
import EditUserModal from "../../components/profile/EditUserModal";

const Profile = ({ navigation }) => {
  const { authState } = React.useContext(AuthContext);
  const [editedValue, setEditedValue] = React.useState("");
  const [openEditModal, setOpenEditModal] = React.useState(false);

  return (
    <View className="flex-1 items-center justify-start">
      <View className="flex-center items-center">
        <TextBox
          semibold
          classNames="text-primary-black text-[100px]  w-[110vw] text-center"
          style={{
            includeFontPadding: false,
            paddingTop: 100,
            fontFamily: "Poppins_700Bold",
          }}
        >
          BENTO
        </TextBox>
        <View className="flex-row items-center justify-around w-full h-full absolute">
          <TextBox semibold classNames="text-white text-3xl mr-10">
            Profile
          </TextBox>
          <Pressable
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <>
              <View className="w-10 h-2 m-1 bg-white" />
              <View className="w-10 h-2 m-1 bg-white" />
              <View className="w-10 h-2 m-1 bg-white" />
            </>
          </Pressable>
        </View>
      </View>
      <View className="w-full px-10">
        <View className="w-full items-center">
          <View className="border border-primary-closed  rounded-full">
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
          <TextBox semibold classNames="text-primary-closed  text-lg">
            {authState.user.name && authState.user.name}
          </TextBox>
        </View>
        {/* Do not remove , for later purpose */}
        {/* <View className="w-full mt-2">
          <TextBox semibold   classNames="text-white">
            Branch
          </TextBox>
          <TextBox semibold   classNames="text-primary-closed  text-lg">
            {authState.user.branch.toUpperCase()}
          </TextBox>
        </View> */}
        <View className="w-full mt-2">
          <TextBox semibold classNames="text-white">
            Email
          </TextBox>
          <TextBox semibold classNames="text-primary-closed  text-lg">
            {authState.user.email && authState.user.email}
          </TextBox>
        </View>
        <View className="w-full mt-2">
          <View className="flex-row w-full justify-between">
            <TextBox semibold classNames="text-white">
              Hostel
            </TextBox>
            <Pressable
              className="flex-row bg-primary-closed  rounded-xl p-1"
              onPress={() => {
                setEditedValue({ Hostel: "hostel" });
                setOpenEditModal(true);
              }}
            >
              <Feather name="edit-2" size={24} color="black" />
            </Pressable>
          </View>
          <TextBox semibold classNames="text-primary-closed  text-lg">
            {authState.user.hostel && authState.user.hostel.toUpperCase()}
          </TextBox>
        </View>
        <View className="w-full mt-2">
          <View className="flex-row w-full justify-between">
            <TextBox semibold classNames="text-white">
              Room No
            </TextBox>
            <Pressable
              className="flex-row bg-primary-closed  rounded-xl p-1"
              onPress={() => {
                setEditedValue({ "Room No": "room_no" });
                setOpenEditModal(true);
              }}
            >
              <Feather name="edit-2" size={24} color="black" />
            </Pressable>
          </View>
          <TextBox semibold classNames="text-primary-closed  text-lg">
            {authState.user.room_no && authState.user.room_no}
          </TextBox>
        </View>
        <View className="w-full mt-2">
          <View className="flex-row w-full justify-between">
            <TextBox semibold classNames="text-white">
              Mobile No
            </TextBox>
            <Pressable
              className="flex-row bg-primary-closed  rounded-xl p-1"
              onPress={() => {
                setEditedValue({ "Mobile No": "mobile_no" });
                setOpenEditModal(true);
              }}
            >
              <Feather name="edit-2" size={24} color="black" />
            </Pressable>
          </View>
          <TextBox semibold classNames="text-primary-closed  text-lg">
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
