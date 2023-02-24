import React from "react";
import { Feather ***REMOVED*** from "@expo/vector-icons";
import { Dimensions, StyleSheet ***REMOVED*** from "react-native";
import { createNativeStackNavigator ***REMOVED*** from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator ***REMOVED*** from "@react-navigation/material-top-tabs";

import Home from "../screens";
import Barber from "../screens/barber/";
import Settings from "../screens/settings/settings";
import Cafeteria from "../screens/cafeteria";
import Appointments from "../screens/appointments";
import Profile from "../screens/settings/profile";

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
          left: (Dimensions.get("window").width / 4 - 19.5) / 2,
          marginBottom: 9,
          height: 4,
          borderRadius: 100,
    ***REMOVED***,
        tabBarStyle: [
          {
            height: 55,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
            elevation: 24,
      ***REMOVED***,
          null,
        ],
  ***REMOVED******REMOVED***
      initialRouteName="home"
      keyboardDismissMode="on-drag"
    >
      <Tab.Screen
        name="home"
        component={Home***REMOVED***
        options={{
          title: "",
          tabBarIcon: ({ color, size ***REMOVED***) => (
            <Feather name="home" size={24***REMOVED*** color={color***REMOVED*** />
          ),
    ***REMOVED******REMOVED***
      />
      <Tab.Screen
        name="appointments"
        component={Appointments***REMOVED***
        options={{
          title: "",
          tabBarIcon: ({ color, size ***REMOVED***) => (
            <Feather name="calendar" size={24***REMOVED*** color={color***REMOVED*** />
          ),
    ***REMOVED******REMOVED***
      />
      <Tab.Screen
        name="cafeteria"
        component={Cafeteria***REMOVED***
        options={{
          title: "",
          tabBarIcon: ({ color, size ***REMOVED***) => (
            <Feather name="shopping-bag" size={24***REMOVED*** color={color***REMOVED*** />
          ),
    ***REMOVED******REMOVED***
      />
      <Tab.Screen
        name="settings"
        component={Settings***REMOVED***
        options={{
          title: "",
          tabBarIcon: ({ color, size ***REMOVED***) => (
            <Feather name="settings" size={24***REMOVED*** color={color***REMOVED*** />
          ),
    ***REMOVED******REMOVED***
      />
    </Tab.Navigator>
  );
***REMOVED***

const TabNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: "Lato_700Bold",
    ***REMOVED***,
        animation: "slide_from_right",
        animationDuration: "50",
  ***REMOVED******REMOVED***
    >
      <HomeStack.Screen name="TabNavigator" component={HomeTabNavigator***REMOVED*** options={{headerShown:false***REMOVED******REMOVED*** />
      <HomeStack.Screen name="Home" component={Home***REMOVED*** />
      <HomeStack.Screen name="Barber" component={Barber***REMOVED*** />
      <HomeStack.Screen name="Profile" component={Profile***REMOVED*** />
      <HomeStack.Screen name="Appointments" component={Appointments***REMOVED*** />
    </HomeStack.Navigator>
  );
***REMOVED***

export default TabNavigator;
