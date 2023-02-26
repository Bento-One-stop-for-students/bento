import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import Icon from "../components/home/Icon";

const Home = ({ navigation, route }) => {
  return (
    <View className="bg-white h-full w-full">
      <View className="  mt-4 flex-row items-start px-2">
        <View className="w-10/12 mx-2 " style={{ elevation: 20 }}>
          <TextInput
            placeholder="Search"
            className="py-2 px-2 border border-[#D9D9D9] "
          />
        </View>
        <View className="w-2/12 mx-2 flex-1 justify-center items-center  ">
          <Image
            className="h-12 w-12  rounded-full"
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
        </View>
      </View>

      <View className="mt-2 border-red-100">
        <Text className="text-lg px-6 " style={{ fontFamily: "Lato_700Bold" }}>
          Upcoming Events
        </Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          className="my-4 px-1 bg-white"
          horizontal={true}
        >
          {[1, 2, 3, 5, 6, 7, 8, 0].map((e, index) => {
            return (
              <View
                key={index}
                className="h-50 rounded-lg w-64 border border-[#D9D9D9] mx-2 "
              >
                <Image
                  className=" w-full h-36 object-center rounded-md"
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2020/04/11/08/26/lake-5029360__480.jpg",
                  }}
                />
                <View className="m-2">
                  <Text
                    className=" text-[10px] text-[#000000]"
                    style={{ fontFamily: "Lato_400Regular" }}
                  >
                    10-12 January, 2023
                  </Text>
                  <Text
                    className=" text-[#403C56] font-[400]  text-[13px]"
                    style={{ fontFamily: "Lato_700Bold" }}
                  >
                    Holi Festival
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View
        className="h-full rounded-t-[30px]  bg-white "
        style={{
          elevation: 20,
        }}
      >
        <View className="px-4 mt-3">
          <Text
            className="text-lg px-2 "
            style={{ fontFamily: "Lato_700Bold" }}
          >
            Services
          </Text>
          <View className="flex-row">
            <Icon
              icon={
                <MaterialIcons
                  name="cleaning-services"
                  size={40}
                  color="black"
                />
              }
              name="Cleaning"
            />
            <Icon
              icon={<Feather name="scissors" size={40} color="black" />}
              name="Barber"
              onPress={() => {
                navigation.navigate("Barber");
              }}
            />
            <Icon
              icon={<MaterialIcons name="logout" size={40} color="black" />}
              name="Outpass"
              onPress={() => {
                navigation.navigate("Outpass");
              }}
              
            />
            <Icon
              icon={<Octicons name="issue-opened" size={40} color="black" />}
              name="Complaints"
              onPress={() => {
                navigation.navigate("Appointments");
              }}
            />
          </View>

          <View
            className="mt-6 justify-between  flex-row"
            style={{ elevation: 44 }}
          >
            <TouchableOpacity
              className="  w-[47%] mx-2 h-40 rounded-2xl bg-[#FF9E00] flex-1 items-center justify-center border-black "
              style={{
                elevation: 6,
              }}
              onPress={() => {
                navigation.navigate("Food Service");
              }}
            >
              <Text
                className="text-[32px] font-[600] text-textWhite"
                style={{ fontFamily: "Lato_700Bold" }}
              >
                Food
              </Text>
              <Text
                className="text-[32px] font-[600] "
                style={{
                  fontFamily: "Lato_700Bold",
                }}
              >
                Order
              </Text>
            </TouchableOpacity>
            <View
              className="  w-[47%] mx-2 h-40 rounded-2xl bg-[#7345F6] flex-1 items-center justify-center border-black "
              style={{
                elevation: 6,
              }}
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
};

export default Home;
