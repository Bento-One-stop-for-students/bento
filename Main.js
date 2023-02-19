import { View, StatusBar ***REMOVED*** from "react-native";
import TabNavigator from "./src/navigation/";
import { NavigationContainer ***REMOVED*** from "@react-navigation/native";
import {useSafeAreaInsets ***REMOVED*** from 'react-native-safe-area-context';

export default function Main(){

    const insets = useSafeAreaInsets();

    return (
        <View style={{ marginTop: insets.top, flex:1 ***REMOVED******REMOVED***>
            <StatusBar
                animated={true***REMOVED***
                backgroundColor="#7345F6"
                barStyle={'light-content'***REMOVED***
                showHideTransition={'fade'***REMOVED***
                hidden={false***REMOVED***
            />
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </View>
    );
***REMOVED***
