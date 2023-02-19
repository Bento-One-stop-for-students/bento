import { View ***REMOVED*** from "react-native";
import { NavigationContainer ***REMOVED*** from "@react-navigation/native";
import { useSafeAreaInsets ***REMOVED*** from 'react-native-safe-area-context';
import { useFonts, Lato_400Regular, Lato_900Black, Lato_700Bold ***REMOVED*** from '@expo-google-fonts/lato';

import TabNavigator from "./navigation";


export default function Main() {
    const insets = useSafeAreaInsets();
    let [fontsLoaded] = useFonts({
        Lato_400Regular, Lato_900Black, Lato_700Bold
    ***REMOVED***

    if (!fontsLoaded) {
        return null;
***REMOVED***;

    return (
        <View style={{ marginTop: insets.top, flex: 1 ***REMOVED******REMOVED***>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </View>
    );
***REMOVED***
