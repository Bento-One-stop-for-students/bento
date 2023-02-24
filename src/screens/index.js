import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
***REMOVED*** from "react-native";
import React from "react";
import { MaterialIcons ***REMOVED*** from "@expo/vector-icons";
import { Feather ***REMOVED*** from "@expo/vector-icons";
import { Octicons ***REMOVED*** from "@expo/vector-icons";
import Icon from "../components/shared/styles/Icon";

const Home = ({navigation, route***REMOVED***) => {
  return (
    <View className="bg-white h-full w-full">
      <View className="  mt-4 flex-row items-start px-2">
        <View className="w-10/12 mx-2 " style={{ elevation: 20 ***REMOVED******REMOVED***>
          <TextInput
            placeholder="Search"
            className="py-2 px-2 border border-[#D9D9D9] "
          />
        </View>
        <View className="w-2/12 mx-2 flex-1 justify-center items-center  ">
          <Image
            className="h-12 w-12  rounded-full"
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" ***REMOVED******REMOVED***
          />
        </View>
      </View>

      <View className="mt-2 border-red-100">
        <Text className="text-lg px-6 " style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***>
          Upcoming Events
        </Text>
        <ScrollView
          showsHorizontalScrollIndicator={false***REMOVED***
          showsVerticalScrollIndicator={false***REMOVED***
          className="my-4 px-1 bg-white"
          horizontal={true***REMOVED***
        >
          {[1, 2, 3, 5, 6, 7, 8, 0].map((e, index) => {
            return (
              <View
                key={index***REMOVED***
                className="h-50 rounded-lg w-64 border border-[#D9D9D9] mx-2 "
              >
                <Image
                  className=" w-full h-36 object-center rounded-md"
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2020/04/11/08/26/lake-5029360__480.jpg",
              ***REMOVED******REMOVED***
                />
                <View className="m-2">
                  <Text
                    className=" text-[10px] text-[#000000]"
                    style={{ fontFamily: "Lato_400Regular" ***REMOVED******REMOVED***
                  >
                    10-12 January, 2023
                  </Text>
                  <Text
                    className=" text-[#403C56] font-[400]  text-[13px]"
                    style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
                  >
                    Holi Festival
                  </Text>
                </View>
              </View>
            );
      ***REMOVED***)***REMOVED***
        </ScrollView>
      </View>

      <View
        className="h-full rounded-t-[30px]  bg-white "
        style={{
          elevation: 20,
    ***REMOVED******REMOVED***
      >
        <View className="px-4 mt-3">
          <Text
            className="text-lg px-2 "
            style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
          >
            Services
          </Text>
          <View className="flex-row">
            <Icon
              icon={
                <MaterialIcons
                  name="cleaning-services"
                  size={40***REMOVED***
                  color="black"
                />
          ***REMOVED***
              name="Cleaning"
            />
            <Icon
              icon={<Feather name="scissors" size={40***REMOVED*** color="black" />***REMOVED***
              name="Barber" onPress={()=>{navigation.navigate('Barber')***REMOVED******REMOVED***
            />
            <Icon
              icon={<MaterialIcons name="logout" size={40***REMOVED*** color="black" />***REMOVED***
              name="Outpass"
            />
            <Icon
              icon={<Octicons name="issue-opened" size={40***REMOVED*** color="black" />***REMOVED***
              name="Complaints"
            />
          </View>

          <View
            className="mt-6 justify-between  flex-row"
            style={{ elevation: 44 ***REMOVED******REMOVED***
          >
            <View
              className="  w-[47%] mx-2 h-40 rounded-2xl bg-[#FF9E00] flex-1 items-center justify-center border-black "
              style={{
                elevation: 6,
          ***REMOVED******REMOVED***
            >
              <Text
                className="text-[32px] font-[600] text-textWhite"
                style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
              >
                Food
              </Text>
              <Text
                className="text-[32px] font-[600] "
                style={{
                  fontFamily: "Lato_700Bold",
            ***REMOVED******REMOVED***
              >
                Order
              </Text>
            </View>
            <View
              className="  w-[47%] mx-2 h-40 rounded-2xl bg-[#7345F6] flex-1 items-center justify-center border-black "
              style={{
                elevation: 6,
          ***REMOVED******REMOVED***
            >
              <Text className="text-[32px] font-[600] text-textWhite">
                Clubs
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
***REMOVED***

export default Home;
