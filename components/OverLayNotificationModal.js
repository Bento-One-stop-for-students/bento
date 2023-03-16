import { View, Text } from "react-native";
import React from "react";
import TextBox from "./TextBox";
import { AuthContext } from "../lib/context/authContext";

const OverLayNotificationModal = (props) => {
  const { authState } = React.useContext(AuthContext);
  return (
    <View
      className={`absolute top-auto bottom-0 items-center justify-center w-full mb-8 ${
        authState.notification ? "" : "hidden"
      }`}
    >
      <View className="bg-white py-2 none w-[80vw] rounded-3xl items-center ">
        <TextBox semibold classNames="">
          {authState.notification}
        </TextBox>
      </View>
    </View>
  );
};

export default OverLayNotificationModal;
