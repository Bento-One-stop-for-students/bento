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

const SignUp = ({ navigation, route ***REMOVED***) => {
  const { handleGoogleSignUp ***REMOVED*** = React.useContext(AuthContext);
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  return (
    <View className="flex-1 flex-col items-center justify-center bg-white">
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
      <View className="mt-7 justify-center items-center ">
        <Text
          className="text-primary-purple text-md mb-1"
          style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
        >
          Use Institute e-mail
        </Text>
        <TouchableOpacity
          className="flex-row rounded-[100px] w-[80vw] bg-primary-purple items-center justify-between h-[6vh] px-[2vw]"
          onPress={async () => {
          ***REMOVED***
              await handleGoogleSignUp(navigation);
        ***REMOVED*** catch (error) {
              console.log({ error ***REMOVED***
              setShowErrorModal(true);
        ***REMOVED***
      ***REMOVED******REMOVED***
        >
          <Text
            className="ml-[18vw] text-white"
            style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
          >
            Sign up with Google
          </Text>
          <AntDesign name="google" size={32***REMOVED*** color="white" className="" />
        </TouchableOpacity>
      </View>
      <View className="flex-row mt-2 items-center justify-center">
        <Text className="text-md" style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***>
          Already have an Account?
        </Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("sign-in");
      ***REMOVED******REMOVED***
        >
          <Text
            className="text-md text-primary-purple "
            style={{ fontFamily: "Lato_700Bold" ***REMOVED******REMOVED***
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
        error="Couldn't sign up. Try again later."
      />
    </View>
  );
***REMOVED***

export default SignUp;
