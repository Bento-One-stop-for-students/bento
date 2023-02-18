import { View ***REMOVED*** from "react-native";
import Navigator from "./src/navigation";
import { useFonts, Lato_400Regular, Lato_900Black ***REMOVED*** from '@expo-google-fonts/lato';

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular, Lato_900Black
  ***REMOVED***

  if (!fontsLoaded) {
    return null;
***REMOVED***
  return (
    <View className = "flex-1 justify-center">
      <Navigator/>
    </View>
  );
***REMOVED***
