import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
***REMOVED*** from "react-native";
import React from "react";
import { AntDesign ***REMOVED*** from "@expo/vector-icons";
import { AuthContext ***REMOVED*** from "../../../hooks/context";
import ErrorModal from "../../components/shared/styles/ErrorModal";
import TextBox from "../../components/shared/styles/TextBox";

const SignUp = ({ navigation, route ***REMOVED***) => {
  const { handleGoogleSignUp ***REMOVED*** = React.useContext(AuthContext);
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  return (
    <View className="flex-1 flex-col items-center justify-center gap-16 bg-white">
      <View className="items-center justify-center">
        <Text
          className="text-black font-bold text-3xl "
          style={{ fontFamily: "Lato_400Regular" ***REMOVED******REMOVED***
        >
          Welcome to Bento!
        </Text>
        <Text
          className="text-primary-purple"
          style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
        >
          Let's get you started
        </Text>
      </View>
      <View className="mt-7 justify-center items-center ">
        <TouchableOpacity
          className="flex-row rounded-[100px] w-[80vw] bg-primary-purple items-center justify-between h-[6vh] px-[2vw]"
          onPress={async () => {
          ***REMOVED***
              await handleGoogleSignUp(navigation);
        ***REMOVED*** catch (error) {
              console.log({ error ***REMOVED***
              if (error.message !== "Sign in action cancelled") {
                setShowErrorModal(true);
          ***REMOVED***
        ***REMOVED***
      ***REMOVED******REMOVED***
        >
          <View className="absolute w-full items-center justify-center">
            <TextBox class="text-white">Sign up with Google</TextBox>
          </View>
          <View className="items-end w-full">
            <AntDesign name="google" size={32***REMOVED*** color="white" />
          </View>
        </TouchableOpacity>
        <TextBox
          class="text-gray-400 text-xs mt-3"
        >
          Use Institute e-mail
        </TextBox>
      </View>
      <View className="flex-row items-center justify-center">
        <Text className="text-xs" style={{ fontFamily: "Lato_400Regular" ***REMOVED******REMOVED***>
          Already have an Account?
        </Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("sign-in");
      ***REMOVED******REMOVED***
        >
          <Text
            className="text-xs text-primary-purple "
            style={{ fontFamily: "Lato_400Regular" ***REMOVED******REMOVED***
          >
            {" "***REMOVED***
            Sign in
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <ErrorModal
        isOpen={showErrorModal***REMOVED***
        onClose={setShowErrorModal***REMOVED***
        title="Error Signing Up"
        error="Either email is not of institute or some other error occured"
      />
    </View>
  );
***REMOVED***

export default SignUp;
