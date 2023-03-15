import "react-native-gesture-handler";

import AppWrapper from "./AppWrapper";
import { AuthProvider } from "./lib/context/authContext";
import { CartProvider } from "./lib/context/cartContext";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppWrapper />
      </CartProvider>
    </AuthProvider>
  );
}
