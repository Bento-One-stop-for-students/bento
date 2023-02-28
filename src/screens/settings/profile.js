import { View, Text, Image, Button ***REMOVED*** from "react-native";
import React from "react";
import { AuthContext ***REMOVED*** from "../../../hooks/context";
import TextBox from "../../components/shared/styles/TextBox";

const Profile = () => {
  const { user ***REMOVED*** = React.useContext(AuthContext);
  const name =
    user.name.split(" ")[0].charAt(0) +
    user.name.split(" ")[0].slice(1).toLowerCase() +
    " " +
    user.name.split(" ")[1].charAt(0) +
    user.name.split(" ")[1].slice(1).toLowerCase();
  return (
    <View className="border-t flex-1 items-center justify-start bg-white">
      <View className="items-center">
        <Image
          className="h-20 w-20 rounded-full mt-6"
          source={{
            uri: `${user.img***REMOVED***`,
      ***REMOVED******REMOVED***
        />
      </View>
      <View className="flex-row justify-between w-full px-6 mt-6">
        <TextBox class="text-lg font-normal" bold>
          Name
        </TextBox>
        <TextBox class="text-lg font-normal">{name***REMOVED***</TextBox>
      </View>
      <View className="flex-row justify-between w-full px-6 mt-6">
        <TextBox class="text-lg font-normal" bold>
          E-mail
        </TextBox>
        <TextBox class="text-lg font-normal">{user.email***REMOVED***</TextBox>
      </View>
      <View className="bg-gray-100 h-16 my-2"></View>
      <View className="flex-row justify-between w-full px-6 mt-6">
        <TextBox class="text-lg font-normal" bold>
          Room No
        </TextBox>
        <TextBox class="text-lg font-normal">{user.room_no***REMOVED***</TextBox>
      </View>
      <View className="flex-row justify-between w-full px-6 mt-6">
        <TextBox class="text-lg font-normal" bold>
          Hostel
        </TextBox>
        <TextBox class="text-lg font-normal">
          {user.hostel.toUpperCase()***REMOVED***
        </TextBox>
      </View>
      <TextBox class="text-xs text-gray-400 font-normal m-10">
        These fields cannot be changed as they are provided by institute
      </TextBox>
    </View>
  );
***REMOVED***

export default Profile;
