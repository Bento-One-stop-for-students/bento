import React from "react";
import "expo-dev-client";

import * as Font from "expo-font";
import { View } from "react-native";
import { NativeBaseProvider } from "native-base";
import * as SplashScreen from "expo-splash-screen";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import Navigator from "./navigation/Navigator";
import { AuthContext } from "./lib/context/authContext";
import { handleIsSignedIn } from "./lib/auth";
import OverLayNotificationModal from "./components/OverLayNotificationModal";

SplashScreen.preventAutoHideAsync();

export default function AppWrapper({ navigation }) {
  const [appIsReady, setAppIsReady] = React.useState(false);
  const { authDispatch } = React.useContext(AuthContext);
  React.useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Poppins_500Medium,
          Poppins_600SemiBold,
        });
        await handleIsSignedIn(authDispatch);
      } catch (err) {
        console.log(err);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  if (!appIsReady) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <SafeAreaView className="flex-1">
        <StatusBar animated={true} backgroundColor="#131212" style="light" />
        <View className="flex-1 bg-[#131212]" onLayout={onLayoutRootView}>
          <Navigator />
          <OverLayNotificationModal />
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
