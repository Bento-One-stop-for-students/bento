import { useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import TabNavigator from "./navigation/TabNavigator";
import AuthNavigator from "./navigation/AuthNavigator";

export default function Main() {
  const insets = useSafeAreaInsets();
  const [loggedIn, setLoggedIn] = useState("true");

  return (
    <View style={{ marginTop: insets.top, flex: 1 }}>
      <NavigationContainer>
        {loggedIn ? <AuthNavigator /> : <TabNavigator />}
      </NavigationContainer>
    </View>
  );
}
