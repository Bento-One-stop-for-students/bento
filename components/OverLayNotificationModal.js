import { View, Text ***REMOVED*** from "react-native";
import React from "react";
import TextBox from "./TextBox";
import { AuthContext ***REMOVED*** from "../lib/context/authContext";

const OverLayNotificationModal = (props) => {
  const { authState ***REMOVED*** = React.useContext(AuthContext);
  return (
    <View
      className={`absolute top-auto bottom-0 items-center justify-center w-full mb-8 ${
        authState.notification ? "" : "hidden"
  ***REMOVED***`***REMOVED***
    >
      <View className="bg-white py-2 none w-[80vw] rounded-3xl items-center ">
        <TextBox semibold classNames="">
          {authState.notification***REMOVED***
        </TextBox>
      </View>
    </View>
  );
***REMOVED***

export default OverLayNotificationModal;
