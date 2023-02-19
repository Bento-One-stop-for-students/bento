import React from "react";
import { Feather } from "@expo/vector-icons";
import { Dimensions, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "../screens";
import Settings from "../screens/settings";
import Cafeteria from "../screens/cafeteria";
import Appointments from "../screens/appointments";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          borderBottomWidth: StyleSheet.hairlineWidth,
        },
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: "Lato_700Bold",
        },
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const AppointmentsStack = createNativeStackNavigator();

function AppointmentsStackScreen() {
  return (
    <AppointmentsStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          borderBottomWidth: StyleSheet.hairlineWidth,
        },
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: "Lato_700Bold",
        },
      }}
    >
      <AppointmentsStack.Screen name="Appointments" component={Appointments} />
    </AppointmentsStack.Navigator>
  );
}

const CafeteriaStack = createNativeStackNavigator();

function CafeteriaStackScreen() {
  return (
    <CafeteriaStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          borderBottomWidth: StyleSheet.hairlineWidth,
        },
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: "Lato_700Bold",
        },
      }}
    >
      <CafeteriaStack.Screen name="Cafeteria" component={Cafeteria} />
    </CafeteriaStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          borderBottomWidth: StyleSheet.hairlineWidth,
        },
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: "Lato_700Bold",
        },
      }}
    >
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
}

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
        },
        tabBarStyle: [
          {
            height: 55,
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
        component={HomeStackScreen}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="appointments"
        component={AppointmentsStackScreen}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="cafeteria"
        component={CafeteriaStackScreen}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsStackScreen}
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

export default TabNavigator;
