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
import * as Notifications from "expo-notifications";
import messaging from "@react-native-firebase/messaging";
import { SafeAreaView } from "react-native-safe-area-context";

import { handleIsSignedIn } from "./lib/auth";
import Navigator from "./navigation/Navigator";
import { AuthContext } from "./lib/context/authContext";
import { registerForPushNotificationsAsync } from "./lib/notifications";
import OverLayNotificationModal from "./components/OverLayNotificationModal";
import NetInfo from "@react-native-community/netinfo";
import NetworkErrorModal from "./components/NetworkErrorModal";

SplashScreen.preventAutoHideAsync();
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function AppExtended({ navigation }) {
  const [showNetworkErrorModal, setShowNetworkErrorModal] =
    React.useState(false);
  const [appIsReady, setAppIsReady] = React.useState(false);
  const { authDispatch } = React.useContext(AuthContext);
  React.useEffect(() => {
    async function prepare() {
      try {
        await registerForPushNotificationsAsync();
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

    // Check Internet Connection
    NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        setShowNetworkErrorModal(true);
      }
    });

    // Foreground notification subscription

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: remoteMessage.notification.title,
          body: remoteMessage.notification.body,
          data: { data: "goes here" },
        },
        trigger: null,
      });
    });
    return unsubscribe;
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
          <NetworkErrorModal
            isOpen={showNetworkErrorModal}
            onClose={setShowNetworkErrorModal}
          />
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
