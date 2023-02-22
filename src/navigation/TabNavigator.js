import React from "react";
import { Feather ***REMOVED*** from "@expo/vector-icons";
import { Dimensions, StyleSheet ***REMOVED*** from "react-native";
import { createNativeStackNavigator ***REMOVED*** from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator ***REMOVED*** from "@react-navigation/material-top-tabs";

import Home from "../screens";
import Settings from "../screens/settings/settings";
import Cafeteria from "../screens/cafeteria";
import Appointments from "../screens/appointments";
import Profile from "../screens/settings/profile";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: "Lato_700Bold",
    ***REMOVED***,
  ***REMOVED******REMOVED***
    >
      <HomeStack.Screen name="Home" component={Home***REMOVED*** />
    </HomeStack.Navigator>
  );
***REMOVED***

const AppointmentsStack = createNativeStackNavigator();

function AppointmentsStackScreen() {
  return (
    <AppointmentsStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
    ***REMOVED***,
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: "Lato_700Bold",
    ***REMOVED***,
  ***REMOVED******REMOVED***
    >
      <AppointmentsStack.Screen name="Appointments" component={Appointments***REMOVED*** />
    </AppointmentsStack.Navigator>
  );
***REMOVED***

const CafeteriaStack = createNativeStackNavigator();

function CafeteriaStackScreen() {
  return (
    <CafeteriaStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          borderBottomWidth: StyleSheet.hairlineWidth,
    ***REMOVED***,
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: "Lato_700Bold",
    ***REMOVED***,
  ***REMOVED******REMOVED***
    >
      <CafeteriaStack.Screen name="Cafeteria" component={Cafeteria***REMOVED*** />
    </CafeteriaStack.Navigator>
  );
***REMOVED***

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          borderBottomWidth: StyleSheet.hairlineWidth,
    ***REMOVED***,
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: "Lato_700Bold",
    ***REMOVED***,
  ***REMOVED******REMOVED***
    >
      <SettingsStack.Screen name="Settings" component={Settings***REMOVED*** />
      <SettingsStack.Screen name="Profile" component={Profile***REMOVED*** />
    </SettingsStack.Navigator>
  );
***REMOVED***

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
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
        component={HomeStackScreen***REMOVED***
        options={{
          title: "",
          tabBarIcon: ({ color, size ***REMOVED***) => (
            <Feather name="home" size={24***REMOVED*** color={color***REMOVED*** />
          ),
    ***REMOVED******REMOVED***
      />
      <Tab.Screen
        name="appointments"
        component={AppointmentsStackScreen***REMOVED***
        options={{
          title: "",
          tabBarIcon: ({ color, size ***REMOVED***) => (
            <Feather name="calendar" size={24***REMOVED*** color={color***REMOVED*** />
          ),
    ***REMOVED******REMOVED***
      />
      <Tab.Screen
        name="cafeteria"
        component={CafeteriaStackScreen***REMOVED***
        options={{
          title: "",
          tabBarIcon: ({ color, size ***REMOVED***) => (
            <Feather name="shopping-bag" size={24***REMOVED*** color={color***REMOVED*** />
          ),
    ***REMOVED******REMOVED***
      />
      <Tab.Screen
        name="settings"
        component={SettingsStackScreen***REMOVED***
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

export default TabNavigator;
