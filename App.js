import "react-native-gesture-handler";

import AppExtended from "./AppExtended";
import { AuthProvider ***REMOVED*** from "./lib/context/authContext";
import { CartProvider ***REMOVED*** from "./lib/context/cartContext";
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
***REMOVED***
