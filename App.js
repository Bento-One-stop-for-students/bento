import { useFonts, Lato_400Regular, Lato_900Black, Lato_700Bold } from '@expo-google-fonts/lato';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Main from "./Main";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular, Lato_900Black, Lato_700Bold
  });

  if (!fontsLoaded) {
    return null;
  };
  return (
    <SafeAreaProvider>
          <Main />
    </SafeAreaProvider>
  );
}
