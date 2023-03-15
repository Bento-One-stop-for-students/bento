import "react-native-gesture-handler";

import AppWrapper from "./AppWrapper";
import { AuthProvider ***REMOVED*** from "./lib/context/authContext";
import { CartProvider ***REMOVED*** from "./lib/context/cartContext";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppWrapper />
      </CartProvider>
    </AuthProvider>
  );
***REMOVED***
