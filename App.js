import "react-native-gesture-handler";

import AppExtended from "./AppExtended";
import { AuthProvider } from "./lib/context/authContext";
import { CartProvider } from "./lib/context/cartContext";
// import database from "@react-native-firebase/database";
// database().setPersistenceEnabled(false);

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppExtended />
      </CartProvider>
    </AuthProvider>
  );
}
