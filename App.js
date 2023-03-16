import "react-native-gesture-handler";

import { AuthProvider ***REMOVED*** from "./lib/context/authContext";
import { CartProvider ***REMOVED*** from "./lib/context/cartContext";
import AppExtended from "./AppExtended";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppExtended />
      </CartProvider>
    </AuthProvider>
  );
***REMOVED***
