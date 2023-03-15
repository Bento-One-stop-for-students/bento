import React from "react";

import { ActivityIndicator, View ***REMOVED*** from "react-native";
import { Image ***REMOVED*** from "react-native";
import { AntDesign ***REMOVED*** from "@expo/vector-icons";

import Button from "../components/Button";
import TextBox from "../components/TextBox";
import { handleGoogleProviderLogin ***REMOVED*** from "../lib/auth";
import { AuthContext ***REMOVED*** from "../lib/context/authContext";

const Login = ({ navigation ***REMOVED***) => {
  const { authDispatch ***REMOVED*** = React.useContext(AuthContext);
  const [disabled, setDisabled] = React.useState(false);
  const [isInvalid, setIsInvalid] = React.useState(false);

  const handleLogin = async (e) => {
    setDisabled(true);
  ***REMOVED***
      const res = await handleGoogleProviderLogin(authDispatch);
  ***REMOVED***
        navigation.navigate("Register", { user: res ***REMOVED***
  ***REMOVED***
      setIsInvalid(false);
***REMOVED*** catch (err) {
      console.log(err);
      setIsInvalid(true);
***REMOVED*** finally {
      setDisabled(false);
***REMOVED***
***REMOVED***;

  return (
    <View className="flex-1">
      <Image
        source={require("../assets/images/boy_on_stairs.png")***REMOVED***
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
          classNames=" bg-[#0181ef] "
          onPress={handleLogin***REMOVED***
          disabled={disabled***REMOVED***
        >
          <View className="flex-row items-center justify-center">
            {disabled ? (
              <ActivityIndicator size="large" color="#1E1B1B" />
            ) : (
              <>
                <TextBox semibold classNames="mr-3">
                  Login with google
                </TextBox>
                <AntDesign name="google" size={40***REMOVED*** color="black" />
              </>
            )***REMOVED***
          </View>
        </Button>
        {isInvalid && (
          <TextBox semibold classNames="text-red-500 mt-1 w-full text-center">
            Check email and try again
          </TextBox>
        )***REMOVED***
      </View>
    </View>
  );
***REMOVED***

export default Login;
