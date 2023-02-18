import { SafeAreaView, StatusBar } from "react-native";
import Navigator from "./src/navigation";
import { useFonts, Lato_400Regular, Lato_900Black } from '@expo-google-fonts/lato';

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular, Lato_900Black
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar
        animated={true}
        backgroundColor="#7345F6"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <Navigator />
    </SafeAreaView>
  );
}
