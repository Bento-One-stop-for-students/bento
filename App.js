import { useFonts, Lato_400Regular, Lato_900Black, Lato_700Bold ***REMOVED*** from '@expo-google-fonts/lato';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets ***REMOVED*** from 'react-native-safe-area-context';
import Main from "./Main";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular, Lato_900Black, Lato_700Bold
  ***REMOVED***

  if (!fontsLoaded) {
    return null;
***REMOVED***;
  return (
    <SafeAreaProvider>
          <Main />
    </SafeAreaProvider>
  );
***REMOVED***
