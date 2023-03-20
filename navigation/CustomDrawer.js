import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Image, Linking } from "react-native";

import TextBox from "../components/TextBox";
import { handleSignOut } from "../lib/auth";
import { AuthContext } from "../lib/context/authContext";

const CustomDrawer = (props) => {
  const { authState, authDispatch } = React.useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <View className="flex-col w-full items-start ml-5 mb-2 justify-around">
        <Image
          source={
            authState.user.img
              ? { uri: authState.user.img }
              : require("../assets/images/user.png")
          }
          className="h-20 w-20 rounded-full"
          resizeMode="contain"
        />
        <View className="w-[70vw]">
          <TextBox semibold classNames="text-white text-sm">
            {authState.user && authState.user.name}
          </TextBox>
          <TextBox semibold classNames="text-white text-xs w-full">
            {authState.user && authState.user.email}
          </TextBox>
        </View>
      </View>
      <View className="h-[1px] bg-white opacity-50 my-3" />
      <DrawerItemList {...props} />

      <DrawerItem
        activeBackgroundColor="#353232"
        labelStyle={{
          fontFamily: "Poppins_600Semibold",
          fontSize: 18,
          color: "#989494",
        }}
        label="Report Bug/Feature"
        onPress={() => {
          Linking.openURL(
            "https://docs.google.com/forms/d/e/1FAIpQLSc85G81ZByPGopJRFTNGrFZSWq0nqrO5rvofNSH8Usvpe6ONQ/viewform?usp=sf_link"
          );
        }}
      />
      <DrawerItem
        activeBackgroundColor="#353232"
        labelStyle={{
          fontFamily: "Poppins_600Semibold",
          fontSize: 18,
          color: "#989494",
        }}
        label="Log Out"
        onPress={async () => {
          try {
            await handleSignOut(authDispatch);
            authDispatch({
              type: "NOTIFICATION_TRUE",
              payload: "Successfully signed out",
            });
          } catch (err) {
            console.log(err);
            authDispatch({
              type: "NOTIFICATION_TRUE",
              payload: "Couldn't sign out",
            });
          } finally {
            setTimeout(() => {
              authDispatch({
                type: "NOTIFICATION_FALSE",
              });
            }, 2000);
          }
        }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
