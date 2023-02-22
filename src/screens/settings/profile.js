import { View, Text, Image, Button ***REMOVED*** from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View className="border-t flex-1 items-center justify-start bg-white">
      <View className="items-center">
        <Image
          className="h-20 w-20 rounded-full mt-6"
          source={{
            uri: "https://www.looper.com/img/gallery/the-modern-family-connection-you-never-noticed-in-mr-peabody-sherman/intro-1597442856.jpg",
      ***REMOVED******REMOVED***
        />
        <View className="mt-4">
          <Button title="Change" />
        </View>
      </View>
      <View className="flex-row justify-between w-full px-6 mt-6">
        <Text className="text-lg font-normal " style={{fontFamily:'Lato_700Bold'***REMOVED******REMOVED***>Name</Text>
        <Text className="text-lg font-normal">Ujjawal Rachhoya</Text>
      </View>
      <View className="flex-row justify-between w-full px-6 mt-6">
        <Text className="text-lg font-normal">Email</Text>
        <Text className="text-lg font-normal">ujjawalr.cs.20@nitj.ac.in</Text>
      </View>
      <View className="bg-gray-100 h-16 my-2"></View>
      <View className="flex-row justify-between w-full px-6 mt-6">
        <Text className="text-lg font-normal">Room No.</Text>
        <Text className="text-lg font-normal">521</Text>
      </View>
      <View className="flex-row justify-between w-full px-6 mt-6">
        <Text className="text-lg font-normal">Hostel</Text>
        <Text className="text-lg font-normal">MBH-B</Text>
      </View>
    </View>
  );
***REMOVED***

export default Profile;
