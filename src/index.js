import { useState ***REMOVED*** from "react";
import { View ***REMOVED*** from "react-native";
import { NavigationContainer ***REMOVED*** from "@react-navigation/native";
import { useSafeAreaInsets ***REMOVED*** from "react-native-safe-area-context";

import TabNavigator from "./navigation/TabNavigator";
import AuthNavigator from "./navigation/AuthNavigator";

export default function Main() {
  const insets = useSafeAreaInsets();
  const [loggedIn, setLoggedIn] = useState("true");

  return (
    <View style={{ marginTop: insets.top, flex: 1 ***REMOVED******REMOVED***>
      <NavigationContainer>
        {loggedIn ? <AuthNavigator /> : <TabNavigator />***REMOVED***
      </NavigationContainer>
    </View>
  );
***REMOVED***
