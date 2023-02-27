import { View, Text, Image, TouchableOpacity ***REMOVED*** from "react-native";
import React from "react";
import { Feather ***REMOVED*** from "@expo/vector-icons";
import { Ionicons ***REMOVED*** from "@expo/vector-icons";
import { AuthContext ***REMOVED*** from "../../../hooks/context";
import ErrorModal from "../../components/shared/styles/ErrorModal";

const Setting = ({ navigation, route ***REMOVED***) => {
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  const { handleSignOut, user ***REMOVED*** = React.useContext(AuthContext);
  const handleProfile = () => {
    navigation.navigate("Profile");
***REMOVED***;

  const name =
    user.name.split(" ")[0].charAt(0) +
    user.name.split(" ")[0].slice(1).toLowerCase() +
    " " +
    user.name.split(" ")[1].charAt(0) +
    user.name.split(" ")[1].slice(1).toLowerCase();

  return (
    <View className="pt-5 border-t  bg-white h-full w-full">
      <View className="flex-row px-6 my-3 items-center justify-center">
        <Image
          className="w-[64] h-[64] rounded-full"
          source={{
            uri: `${user.img***REMOVED***`,
      ***REMOVED******REMOVED***
        />
        <View className="px-4  items-start justify-center">
          <Text className="text-[24px] text-[#090A0A] font-[700]">{name***REMOVED***</Text>
          <Text className="font-[400] text-[#090A0A] text-[16px]">
            {user.email***REMOVED***
          </Text>
        </View>
      </View>
      <TouchableOpacity className="px-10 mt-3" onPress={handleProfile***REMOVED***>
        <View className="py-4 w-full bg-[#E7E7FF] border border-primary-purple rounded-[48px]">
          <Text className="text-center text-[16px] font-[500] text-primary-purple">
            View Profile
          </Text>
        </View>
      </TouchableOpacity>
      <View className="mt-6  px-7">
        <View className="flex-row my-2  justify-between">
          <View className="flex-row justify-center items-center">
            <Ionicons name="notifications-outline" size={28***REMOVED*** color="black" />
            <Text className="mx-3 text-[16px] font-[400]">Notifications</Text>
          </View>
          <View className="flex-row">
            <Feather name="chevron-right" size={28***REMOVED*** color="black" />
          </View>
        </View>
      </View>

      <View className="mt-10 px-9">
        <Text className="text-[16px] my-3">Help</Text>
        <TouchableOpacity
          onPress={() => {
          ***REMOVED***
              handleSignOut();
        ***REMOVED*** catch (error) {
              setShowErrorModal(true);
        ***REMOVED***
      ***REMOVED******REMOVED***
        >
          <Text className="text-[16px] my-3">Log out</Text>
        </TouchableOpacity>
      </View>
      <ErrorModal
        isOpen={showErrorModal***REMOVED***
        onClose={setShowErrorModal***REMOVED***
        title="Error Signing Out"
        error="Couldn't sign Out. Try again later."
      />
    </View>
  );
***REMOVED***

export default Setting;
