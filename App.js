import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./src/main";
import { LogBox, StatusBar } from "react-native";
import {
  useFonts,
  Lato_400Regular,
  Lato_900Black,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { NativeBaseProvider } from "native-base";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_900Black,
    Lato_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  LogBox.ignoreAllLogs();
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
        <Main />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
