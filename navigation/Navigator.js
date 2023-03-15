import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
***REMOVED*** from "@react-navigation/stack";
import { View ***REMOVED*** from "react-native";
import { NavigationContainer ***REMOVED*** from "@react-navigation/native";
import { createDrawerNavigator ***REMOVED*** from "@react-navigation/drawer";

import Home from "../screens/home";
import Login from "../screens/login";
import CustomDrawer from "./CustomDrawer";
import Register from "../screens/register";
import { AuthContext ***REMOVED*** from "../lib/context/authContext";
import FoodOrder from "../screens/foodOrder";
import Cart from "../screens/drawer/cart";
import Orders from "../screens/drawer/orders";
import Bookings from "../screens/drawer/bookings";
import Profile from "../screens/drawer/profile";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props***REMOVED*** />***REMOVED***
      screenOptions={{
        headerShown: false,
        sceneContainerStyle: { backgroundColor: "#131212" ***REMOVED***,
        drawerActiveBackgroundColor: "#353232",
        drawerPosition: "right",
        drawerStyle: {
          backgroundColor: "#131212",
          width: "80%",
    ***REMOVED***,
        drawerLabelStyle: {
          fontFamily: "Poppins_600Semibold",
          fontSize: 18,
          color: "#989494",
    ***REMOVED***,
        drawerType: "slide",
  ***REMOVED******REMOVED***
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={Home***REMOVED*** />
      <Drawer.Screen name="Profile" component={Profile***REMOVED*** />
      <Drawer.Screen name="Your Orders" component={Orders***REMOVED*** />
    </Drawer.Navigator>
  );
***REMOVED***

export const navigationRef = React.createRef();
const Stack = createStackNavigator();

function Navigator() {
  const { authState ***REMOVED*** = React.useContext(AuthContext);
  return (
    <View className="flex-1">
      <NavigationContainer ref={navigationRef***REMOVED***>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            detachPreviousScreen: false,
            cardStyle: { backgroundColor: "#131212" ***REMOVED***,
      ***REMOVED******REMOVED***
        >
          {!authState.isLoggedIn ? (
            <>
              <Stack.Screen name="Login" component={Login***REMOVED*** />
              <Stack.Screen name="Register" component={Register***REMOVED*** />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Main"
                component={DrawerNavigator***REMOVED***
                options={{ ...TransitionPresets.ModalSlideFromBottomIOS ***REMOVED******REMOVED***
              />
              <Stack.Screen name="Food Order" component={FoodOrder***REMOVED*** />
              <Stack.Screen name="Cart" component={Cart***REMOVED*** />
            </>
          )***REMOVED***
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
***REMOVED***

export default Navigator;
