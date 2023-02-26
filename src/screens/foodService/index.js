import { Text, View } from "react-native";

import React from "react";
import ViewBox from "../../components/shared/styles/ViewBox";
import TextBox from "../../components/shared/styles/TextBox";
import CanteneCard from "../../components/foodService/CanteneCard";

const FoodService = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white items-center justify-start p-5">
      <TextBox bold class="w-full text-start text-lg mb-3">
        Cantenes
      </TextBox>
      <CanteneCard
        title="Night Cantene"
        status={true}
        onPress={() => {
          navigation.navigate("Cantene");
        }}
      />
      <CanteneCard
        title="Snackers"
        status={true}
        onPress={() => {
          navigation.navigate("Cantene");
        }}
      />
      <CanteneCard
        title="Yadav Cantene"
        status={true}
        onPress={() => {
          navigation.navigate("Cantene");
        }}
      />
      <CanteneCard
        title="Campus Cafe"
        status={true}
        onPress={() => {
          navigation.navigate("Cantene");
        }}
      />
    </View>
  );
};

export default FoodService;
