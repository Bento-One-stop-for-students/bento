import { NativeBaseProvider } from "native-base";
import { LogBox, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {
  useFonts,
  Lato_400Regular,
  Lato_900Black,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

import Main from "./src/main";

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
    <GestureHandlerRootView style={{ flex: 1 }}>
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
    </GestureHandlerRootView>
  );
}
