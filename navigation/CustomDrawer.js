import React from "react";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
***REMOVED*** from "@react-navigation/drawer";
import { View, Image, Linking ***REMOVED*** from "react-native";

import TextBox from "../components/TextBox";
import { handleSignOut ***REMOVED*** from "../lib/auth";
import { AuthContext ***REMOVED*** from "../lib/context/authContext";

const CustomDrawer = (props) => {
  const { authState, authDispatch ***REMOVED*** = React.useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props***REMOVED***>
      <View className="flex-col w-full items-start ml-5 mb-2 justify-around">
        <Image
          source={
            authState.user.img
              ? { uri: authState.user.img ***REMOVED***
              : require("../assets/images/user.png")
      ***REMOVED***
          className="h-20 w-20 rounded-full"
          resizeMode="contain"
        />
        <View className="w-[70vw]">
          <TextBox semibold classNames="text-white text-sm">
            {authState.user && authState.user.name***REMOVED***
          </TextBox>
          <TextBox semibold classNames="text-white text-xs w-full">
            {authState.user && authState.user.email***REMOVED***
          </TextBox>
        </View>
      </View>
      <View className="h-[1px] bg-white opacity-50 my-3" />
      <DrawerItemList {...props***REMOVED*** />

      <DrawerItem
        activeBackgroundColor="#353232"
        labelStyle={{
          fontFamily: "Poppins_600Semibold",
          fontSize: 18,
          color: "#989494",
    ***REMOVED******REMOVED***
        label="Report Bug/Feature"
        onPress={() => {
          Linking.openURL(
            "https://docs.google.com/forms/d/e/1FAIpQLSc85G81ZByPGopJRFTNGrFZSWq0nqrO5rvofNSH8Usvpe6ONQ/viewform?usp=sf_link"
          );
    ***REMOVED******REMOVED***
      />
      <DrawerItem
        activeBackgroundColor="#353232"
        labelStyle={{
          fontFamily: "Poppins_600Semibold",
          fontSize: 18,
          color: "#989494",
    ***REMOVED******REMOVED***
        label="Log Out"
        onPress={async () => {
        ***REMOVED***
            await handleSignOut(authDispatch);
      ***REMOVED***
              type: "NOTIFICATION_TRUE",
              payload: "Successfully signed out",
            ***REMOVED***
      ***REMOVED*** catch (err) {
            console.log(err);
      ***REMOVED***
              type: "NOTIFICATION_TRUE",
              payload: "Couldn't sign out",
            ***REMOVED***
      ***REMOVED*** finally {
            setTimeout(() => {
        ***REMOVED***
                type: "NOTIFICATION_FALSE",
              ***REMOVED***
        ***REMOVED***, 2000);
      ***REMOVED***
    ***REMOVED******REMOVED***
      />
    </DrawerContentScrollView>
  );
***REMOVED***

export default CustomDrawer;
