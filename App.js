import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./src";
import { StatusBar } from "react-native";
import {
  useFonts,
  Lato_400Regular,
  Lato_900Black,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import GetStarted from "./src/screens/login";
import { useState } from "react";
import { NativeBaseProvider } from "native-base";

export default function App() {
  const [showGetStartedScreen, setShowGetStartedScreen] = useState(true);
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_900Black,
    Lato_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  setTimeout(() => setShowGetStartedScreen(false), 1000);

  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <StatusBar
          animated={true}
          backgroundColor="#7345F6"
          barStyle={"light-content"}
          showHideTransition={"fade"}
          hidden={false}
        />
        {showGetStartedScreen ? <GetStarted /> : <Main />}
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
