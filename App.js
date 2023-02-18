import { SafeAreaView, StatusBar ***REMOVED*** from "react-native";
import Navigator from "./src/navigation";
import { useFonts, Lato_400Regular, Lato_900Black ***REMOVED*** from '@expo-google-fonts/lato';

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular, Lato_900Black
  ***REMOVED***

  if (!fontsLoaded) {
    return null;
***REMOVED***;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar
        animated={true***REMOVED***
        backgroundColor="#7345F6"
        barStyle={'light-content'***REMOVED***
        showHideTransition={'fade'***REMOVED***
        hidden={false***REMOVED***
      />
      <Navigator />
    </SafeAreaView>
  );
***REMOVED***
