import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { AuthContext } from "../../../hooks/context";
import ErrorModal from "../../components/shared/styles/ErrorModal";
import TextBox from "../../components/shared/styles/TextBox";

const SignIn = ({ navigation, route }) => {
  const { handleGoogleSignIn } = React.useContext(AuthContext);
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  return (
    <View className="flex-1 flex-col items-center justify-center gap-16 bg-white">
      <View className="items-center justify-center">
        <Text
          className="text-black font-bold text-6xl tracking-[10]"
          style={{ fontFamily: "Lato_700Bold" }}
        >
          BENTO
        </Text>
        <Text
          className="text-primary-purple"
          style={{ fontFamily: "Lato_700Bold" }}
        >
          One stop for students
        </Text>
      </View>
      <View className="mt-10 justify-center items-center ">
        <TouchableOpacity
          className="flex-row rounded-[100px] w-[80vw] bg-primary-purple items-center justify-between h-[6vh] px-[2vw]"
          onPress={async () => {
            try {
              await handleGoogleSignIn(navigation);
            } catch (error) {
              if (error.message !== "Sign in action cancelled") {
                setShowErrorModal(true);
              }
            }
          }}
        >
          <View className="absolute w-full items-center justify-center">
            <TextBox class="text-white">Sign in with Google</TextBox>
          </View>
          <View className="items-end w-full">
            <AntDesign name="google" size={32} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center justify-center">
        <Text className="text-xs" style={{ fontFamily: "Lato_400Regular" }}>
          Don't have an Account?
        </Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("sign-up");
          }}
        >
          <Text
            className="text-xs text-primary-purple "
            style={{ fontFamily: "Lato_400Regular" }}
          >
            {" "}
            Sign up here
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <ErrorModal
        isOpen={showErrorModal}
        onClose={setShowErrorModal}
        title="Error Signing In"
        error="Either email is not of institute or some other error occured"
      />
    </View>
  );
};

export default SignIn;
