import { SafeAreaProvider ***REMOVED*** from "react-native-safe-area-context";
import Main from "./src";
import { StatusBar ***REMOVED*** from "react-native";
import {
  useFonts,
  Lato_400Regular,
  Lato_900Black,
  Lato_700Bold,
***REMOVED*** from "@expo-google-fonts/lato";
import GetStarted from "./src/screens/login";
import { useState ***REMOVED*** from "react";
import { NativeBaseProvider ***REMOVED*** from "native-base";

export default function App() {
  const [showGetStartedScreen, setShowGetStartedScreen] = useState(true);
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_900Black,
    Lato_700Bold,
  ***REMOVED***
  if (!fontsLoaded) {
    return null;
***REMOVED***

  setTimeout(() => setShowGetStartedScreen(false), 1000);

  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <StatusBar
          animated={true***REMOVED***
          backgroundColor="#7345F6"
          barStyle={"light-content"***REMOVED***
          showHideTransition={"fade"***REMOVED***
          hidden={false***REMOVED***
        />
        {showGetStartedScreen ? <GetStarted /> : <Main />***REMOVED***
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
***REMOVED***
