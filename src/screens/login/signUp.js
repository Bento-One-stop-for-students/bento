import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../../../hooks/context";
import ErrorModal from "../../components/shared/styles/ErrorModal";

const SignUp = ({ navigation, route }) => {
  const { handleGoogleSignUp } = React.useContext(AuthContext);
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  return (
    <View className="flex-1 flex-col items-center justify-center bg-white">
      <Text
        className="text-black font-bold text-3xl "
        style={{ fontFamily: "Lato_400Regular" }}
      >
        Welcome to Bento!
      </Text>
      <Text
        className="text-primary-purple"
        style={{ fontFamily: "Lato_700Bold" }}
      >
        Let's get you started
      </Text>
      <View className="mt-7 justify-center items-center ">
        <Text
          className="text-primary-purple text-md mb-1"
          style={{ fontFamily: "Lato_700Bold" }}
        >
          Use Institute e-mail
        </Text>
        <TouchableOpacity
          className="flex-row rounded-[100px] w-[80vw] bg-primary-purple items-center justify-between h-[6vh] px-[2vw]"
          onPress={async () => {
            try {
              await handleGoogleSignUp(navigation);
            } catch (error) {
              console.log({ error });
              if (error.message !== "Sign in action cancelled") {
                setShowErrorModal(true);
              }
            }
          }}
        >
          <Text
            className="ml-[18vw] text-white"
            style={{ fontFamily: "Lato_700Bold" }}
          >
            Sign up with Google
          </Text>
          <AntDesign name="google" size={32} color="white" className="" />
        </TouchableOpacity>
      </View>
      <View className="flex-row mt-2 items-center justify-center">
        <Text className="text-md" style={{ fontFamily: "Lato_700Bold" }}>
          Already have an Account?
        </Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("sign-in");
          }}
        >
          <Text
            className="text-md text-primary-purple "
            style={{ fontFamily: "Lato_700Bold" }}
          >
            {" "}
            Sign in
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <ErrorModal
        isOpen={showErrorModal}
        onClose={setShowErrorModal}
        title="Error Signing Up"
        error="Either email is not of institute or some other error occured"
      />
    </View>
  );
};

export default SignUp;
