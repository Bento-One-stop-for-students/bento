import React from "react";
import { Feather } from "@expo/vector-icons";
import { Dimensions, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "../screens";
import Barber from "../screens/barber/";
import Settings from "../screens/settings";
import FoodService from "../screens/foodService";
import Appointments from "../screens/appointments";
import Profile from "../screens/settings/profile";
import Cantene from "../screens/foodService/cantene";
import Outpass from "../screens/outpass";

const HomeStack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarActiveTintColor: "#7345F6",
        tabBarInactiveTintColor: "gray",
        tabBarPressColor: "transparent",
        tabBarPressOpacity: 0,
        tabBarIndicatorStyle: {
          width: 21,
          backgroundColor: "#7345F6",
          left: (Dimensions.get("screen").width / 3 - 21) / 2,
          marginBottom: 9,
          height: 4,
          borderRadius: 100,
        },
        tabBarStyle: [
          {
            height: 55,
            borderTopWidth: StyleSheet.hairlineWidth,
            borderColor: "#D9D9D9",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
            elevation: 24,
          },
          null,
        ],
      }}
      initialRouteName="home"
      keyboardDismissMode="on-drag"
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="appointments"
        component={Appointments}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" size={24} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="food-service"
        component={FoodService}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: "Lato_700Bold",
        },
        animation: "slide_from_right",
        animationDuration: "50",
      }}
    >
      <HomeStack.Screen
        name="TabNavigator"
        component={HomeTabNavigator}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Barber" component={Barber} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="Food Service" component={FoodService} />
      <HomeStack.Screen name="Cantene" component={Cantene} />
      <HomeStack.Screen name="Appointments" component={Appointments} />
      <HomeStack.Screen name="Outpass" component={Outpass} />
    </HomeStack.Navigator>
  );
};

export default TabNavigator;
