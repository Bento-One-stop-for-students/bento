import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../../hooks/context";

const Setting = ({ navigation, route }) => {
  const { handleSignOut } = React.useContext(AuthContext);
  const handleProfile = () => {
    navigation.navigate("Profile");
  };
  return (
    <View className="pt-10 border-t  bg-white h-full w-full">
      <View className="flex-row px-6 my-3">
        <View className="rounded-full  w-[64] h-[64]">
          <Image
            className="h-full w-full rounded-full"
            source={{
              uri: "https://www.looper.com/img/gallery/the-modern-family-connection-you-never-noticed-in-mr-peabody-sherman/intro-1597442856.jpg",
            }}
          />
        </View>
        <View className="px-4 justify-center">
          <Text className="text-[24px] text-[#090A0A] font-[700]">
            Ujjawal Rachhoya
          </Text>
          <Text className="font-[400] text-[#090A0A] text-[16px]">
            ujjawalr.cs.20@nitj.ac.in
          </Text>
        </View>
      </View>
      <TouchableOpacity className="px-10 mt-3" onPress={handleProfile}>
        <View className="py-4 w-full bg-[#E7E7FF] border border-primary-purple rounded-[48px]">
          <Text className="text-center text-[16px] font-[500] text-primary-purple">
            View Profile
          </Text>
        </View>
      </TouchableOpacity>
      <View className="mt-6  px-7">
        <View className="flex-row my-2  justify-between">
          <TouchableOpacity className="flex-row justify-center items-center">
            <Feather name="lock" size={28} color="black" />
            <Text className="mx-3 text-[16px] font-[400]">Password</Text>
          </TouchableOpacity>
          <View className="flex-row">
            <Feather name="chevron-right" size={28} color="black" />
          </View>
        </View>
        <View className="flex-row my-2  justify-between">
          <View className="flex-row justify-center items-center">
            <Ionicons name="notifications-outline" size={28} color="black" />
            <Text className="mx-3 text-[16px] font-[400]">Notifications</Text>
          </View>
          <View className="flex-row">
            <Feather name="chevron-right" size={28} color="black" />
          </View>
        </View>
      </View>

      <View className="mt-10 px-9">
        <Text className="text-[16px] my-3">Help</Text>
        <TouchableOpacity onPress={handleSignOut}>
          <Text className="text-[16px] my-3">Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;
