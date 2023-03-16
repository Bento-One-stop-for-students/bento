import "react-native-gesture-handler";

import { AuthProvider } from "./lib/context/authContext";
import { CartProvider } from "./lib/context/cartContext";
import AppExtended from "./AppExtended";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppExtended />
      </CartProvider>
    </AuthProvider>
  );
}
