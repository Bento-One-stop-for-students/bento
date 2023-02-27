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
import ViewBox from "../components/shared/styles/ViewBox";
import TextBox from "../components/shared/styles/TextBox";
import Button from "../components/shared/styles/Button";
import { AuthContext } from "../../hooks/context";

const Home = ({ navigation, route }) => {
  const { user } = React.useContext(AuthContext);
  return (
    <View class="flex-1 bg-white ">
      <View className="flex-row items-center  bg-white justify-between w-full px-10 pt-2">
        <TextBox bold class="text-xl">
          Home
        </TextBox>
        <Image
          source={{
            uri: `${user.img}`,
            method: "POST",
            headers: {
              Pragma: "no-cache",
            },
            body: "Your Body goes here",
          }}
          style={{ width: 40, height: 40 }}
          className="rounded-3xl"
        />
      </View>
      <View className="flex-col bg-white h-full">
        <ViewBox class="p-5 mx-10 my-5 items-start">
          <TextBox bold class="text-xl">
            Barber
          </TextBox>
          <View className="flex-col justify-evenly w-full mt-4">
            <View className="flex-row">
              <TextBox bold>Status : </TextBox>
              <TextBox>On </TextBox>
            </View>
            <View className="flex-row mb-3">
              <TextBox bold>Crowd : </TextBox>
              <TextBox>15 People in Queue </TextBox>
            </View>
            <Button
              class="w-full"
              text="Book Appointment"
              onPress={() => {
                navigation.navigate("Barber");
              }}
            />
          </View>
        </ViewBox>
        <ViewBox class="p-5 mx-10 my-5 items-start">
          <TextBox bold class="text-xl">
            Snackmen Services
          </TextBox>
          <View className="flex-col justify-evenly w-full mt-4">
            <View className="flex-row mb-3">
              <TextBox bold>Status : </TextBox>
              <TextBox>On </TextBox>
            </View>
            <Button
              class="w-full"
              text="Order Food"
              onPress={() => {
                navigation.navigate("Food Service");
              }}
            />
          </View>
        </ViewBox>
        <ViewBox class="p-5 mx-10 my-5 items-start">
          <TextBox bold class="text-xl">
            Outpass
          </TextBox>
          <View className="flex-col justify-evenly w-full mt-4">
            <View className="flex-row mb-3">
              <TextBox bold>Status : </TextBox>
              <TextBox>On </TextBox>
            </View>
            <Button
              class="w-full"
              text="Take Outpass"
              onPress={() => {
                navigation.navigate("Outpass");
              }}
            />
          </View>
        </ViewBox>
      </View>
    </View>
  );
};

export default Home;
