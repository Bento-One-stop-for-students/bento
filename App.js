import { SafeAreaProvider ***REMOVED*** from "react-native-safe-area-context";
import Main from "./src/main";
import { LogBox, StatusBar ***REMOVED*** from "react-native";
import {
  useFonts,
  Lato_400Regular,
  Lato_900Black,
  Lato_700Bold,
***REMOVED*** from "@expo-google-fonts/lato";
import { NativeBaseProvider ***REMOVED*** from "native-base";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_900Black,
    Lato_700Bold,
  ***REMOVED***
  if (!fontsLoaded) {
    return null;
***REMOVED***

  LogBox.ignoreAllLogs();
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
        <Main />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
***REMOVED***
