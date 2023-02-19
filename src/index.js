import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFonts, Lato_400Regular, Lato_900Black, Lato_700Bold } from '@expo-google-fonts/lato';

import TabNavigator from "./navigation";


export default function Main() {
    const insets = useSafeAreaInsets();
    let [fontsLoaded] = useFonts({
        Lato_400Regular, Lato_900Black, Lato_700Bold
    });

    if (!fontsLoaded) {
        return null;
    };

    return (
        <View style={{ marginTop: insets.top, flex: 1 }}>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </View>
    );
}
