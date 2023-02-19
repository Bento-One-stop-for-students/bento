import { View, StatusBar } from "react-native";
import TabNavigator from "./src/navigation/";
import { NavigationContainer } from "@react-navigation/native";
import {useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Main(){

    const insets = useSafeAreaInsets();

    return (
        <View style={{ marginTop: insets.top, flex:1 }}>
            <StatusBar
                animated={true}
                backgroundColor="#7345F6"
                barStyle={'light-content'}
                showHideTransition={'fade'}
                hidden={false}
            />
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </View>
    );
}
