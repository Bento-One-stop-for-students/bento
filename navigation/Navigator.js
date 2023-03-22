import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/home";
import Login from "../screens/login";
import Cart from "../screens/drawer/cart";
import CustomDrawer from "./CustomDrawer";
import Register from "../screens/register";
import FoodOrder from "../screens/foodOrder";
import Orders from "../screens/drawer/orders";
import Profile from "../screens/drawer/profile";
import { AuthContext } from "../lib/context/authContext";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        sceneContainerStyle: { backgroundColor: "#131212" },
        drawerActiveBackgroundColor: "#353232",
        drawerPosition: "right",
        drawerStyle: {
          backgroundColor: "#131212",
          width: "80%",
        },
        drawerLabelStyle: {
          fontFamily: "Poppins_600Semibold",
          fontSize: 18,
          color: "#989494",
        },
        drawerType: "slide",
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Your Orders" component={Orders} />
    </Drawer.Navigator>
  );
}

export const navigationRef = React.createRef();
const Stack = createStackNavigator();

function Navigator() {
  const { authState } = React.useContext(AuthContext);
  return (
    <View className="flex-1">
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            detachPreviousScreen: false,
            cardStyle: { backgroundColor: "#131212" },
          }}
        >
          {!authState.isLoggedIn ? (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Main"
                component={DrawerNavigator}
                options={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
              />
              <Stack.Screen name="Food Order" component={FoodOrder} />
              <Stack.Screen name="Cart" component={Cart} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Navigator;
