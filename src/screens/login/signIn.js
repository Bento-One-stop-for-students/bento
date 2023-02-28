import React from "react";
import { AntDesign ***REMOVED*** from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
***REMOVED*** from "react-native";
import { AuthContext ***REMOVED*** from "../../../hooks/context";
import ErrorModal from "../../components/shared/styles/ErrorModal";
import TextBox from "../../components/shared/styles/TextBox";

const SignIn = ({ navigation, route ***REMOVED***) => {
  const { handleGoogleSignIn ***REMOVED*** = React.useContext(AuthContext);
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  return (
    <View className="flex-1 flex-col items-center justify-center gap-16 bg-white">
      <View className="items-center justify-center">
        <Text
          className="text-black font-bold text-6xl tracking-[10]"
          style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
        >
          BENTO
        </Text>
        <Text
          className="text-primary-purple"
          style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
        >
          One stop for students
        </Text>
      </View>
      <View className="mt-10 justify-center items-center ">
        <TouchableOpacity
          className="flex-row rounded-[100px] w-[80vw] bg-primary-purple items-center justify-between h-[6vh] px-[2vw]"
          onPress={async () => {
          ***REMOVED***
              await handleGoogleSignIn(navigation);
        ***REMOVED*** catch (error) {
              if (error.message !== "Sign in action cancelled") {
                setShowErrorModal(true);
          ***REMOVED***
        ***REMOVED***
      ***REMOVED******REMOVED***
        >
          <View className="absolute w-full items-center justify-center">
            <TextBox class="text-white">Sign in with Google</TextBox>
          </View>
          <View className="items-end w-full">
            <AntDesign name="google" size={32***REMOVED*** color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center justify-center">
        <Text className="text-xs" style={{ fontFamily: "Lato_400Regular" ***REMOVED******REMOVED***>
          Don't have an Account?
        </Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("sign-up");
      ***REMOVED******REMOVED***
        >
          <Text
            className="text-xs text-primary-purple "
            style={{ fontFamily: "Lato_400Regular" ***REMOVED******REMOVED***
          >
            {" "***REMOVED***
            Sign up here
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <ErrorModal
        isOpen={showErrorModal***REMOVED***
        onClose={setShowErrorModal***REMOVED***
        title="Error Signing In"
        error="Either email is not of institute or some other error occured"
      />
    </View>
  );
***REMOVED***

export default SignIn;
