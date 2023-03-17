import React from "react";

import { ActivityIndicator, View } from "react-native";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Button from "../components/Button";
import TextBox from "../components/TextBox";
import { handleGoogleProviderLogin } from "../lib/auth";
import { AuthContext } from "../lib/context/authContext";

const Login = ({ navigation }) => {
  const { authDispatch } = React.useContext(AuthContext);
  const [disabled, setDisabled] = React.useState(false);
  const [isInvalid, setIsInvalid] = React.useState(false);

  const handleLogin = async (e) => {
    setDisabled(true);
    try {
      const res = await handleGoogleProviderLogin(authDispatch);
      if (res) {
        navigation.navigate("Register", { user: res });
      }
      setIsInvalid(false);
    } catch (err) {
      console.log(err);
      setIsInvalid(true);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <View className="flex-1">
      <Image
        source={require("../assets/images/boy_on_stairs.png")}
        className="absolute h-full w-full opacity-50"
        resizeMode="contain"
      />
      <View className="m-10 flex-1">
        <TextBox semibold classNames="text-white mt-10 text-5xl py-10 ">
          Login to your account
        </TextBox>
        <TextBox semibold classNames="text-white mt-16 w-full text-center">
          Use institute email
        </TextBox>
        <Button
          classNames=" bg-[#0181ef] mt-2"
          onPress={handleLogin}
          disabled={disabled}
        >
          <View className="flex-row items-center justify-center">
            {disabled ? (
              <ActivityIndicator size="large" color="#1E1B1B" />
            ) : (
              <>
                <TextBox semibold classNames="mr-3 text-white">
                  Login with google
                </TextBox>
                <AntDesign name="google" size={40} color="white" />
              </>
            )}
          </View>
        </Button>
        {isInvalid && (
          <TextBox semibold classNames="text-red-500 mt-1 w-full text-center">
            Check email and try again
          </TextBox>
        )}
      </View>
    </View>
  );
};

export default Login;
