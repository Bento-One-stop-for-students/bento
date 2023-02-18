import { View } from "react-native";
import Navigator from "./src/navigation";
import { useFonts, Lato_400Regular, Lato_900Black } from '@expo-google-fonts/lato';

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular, Lato_900Black
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className = "flex-1 bg-white">
      <Navigator/>
    </View>
  );
}
