import React from "react";

// const Cart = () => {
//   // push item to Cart

//   const [cart, setCart] = React.useState([]);

//   const findItem = (id) => {
//     const itemFound = cart.findIndex((x) => x.id === id);
//     return itemFound;
// ***REMOVED***;

//   const addItemToCart = (item) => {
//     let itemFound = findItem(item.id);
//     if (itemFound >= 0) {
//       setCart(
//         cart.map((x) => (x.id === item.id ? { ...x, amount: x.amount + 1 ***REMOVED*** : x))
//       );
// ***REMOVED*** else {
//       setCart(
//         cart.concat({
//           id: item.id,
//           amount: 1,
//           name: item.name,
//           price: item.price,
//     ***REMOVED***)
//       );
// ***REMOVED***
// ***REMOVED***;

//   // pop item from Cart

//   const removeItemFromCart = (id) => {
//     let itemFound = findItem(id);
//     if (itemFound >= 0) {
//       if (cart[itemFound].amount > 1) {
//         setCart(
//           cart.map((item) =>
//             item.id === id ? { ...item, amount: item.amount - 1 ***REMOVED*** : item
//           )
//         );
//   ***REMOVED*** else {
//         setCart([
//           ...cart.slice(0, itemFound),
//           ...cart.slice(itemFound + 1, cart.length),
//           // cart.filter(item => item.id != id)
//         ]);
//   ***REMOVED***
// ***REMOVED*** else {
// ***REMOVED***
// ***REMOVED***
//     return false;
// ***REMOVED***;

//   const getItemCount = (id) => {
//     let itemFound = findItem(id);
//     if (itemFound >= 0) {
//       return cart[itemFound].amount;
// ***REMOVED***

//     return 0;
// ***REMOVED***;

//   const getCartDetail = () => {
//     return cart;
// ***REMOVED***;
//   const cartContext = React.useMemo(() => ({
//     cart,
//     setCart,
//     addItemToCart,
//     removeItemFromCart,
//     getCartDetail,
//     getItemCount,
// ***REMOVED***));

//   return { cartContext ***REMOVED***
// ***REMOVED***

// export default Cart;

const initialState = {
  cart: {***REMOVED***,
***REMOVED***

const CartContext = React.createContext({***REMOVED***

function cartReducer(state, action) {
  const item = state.cart[action.payload.id];
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: item
            ? {
                ...item,
                qty: item.qty + 1,
          ***REMOVED***
            : {
                ...action.payload,
                qty: 1,
          ***REMOVED***,
    ***REMOVED***,
  ***REMOVED***;
    case "REMOVE_FROM_CART":
      if (item.qty > 1) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [action.payload.id]: {
              ...item,
              qty: item.qty - 1,
        ***REMOVED***,
      ***REMOVED***,
    ***REMOVED***;
  ***REMOVED*** else {
        let newCart = { ...state.cart ***REMOVED***
        delete newCart[action.payload.id];
        return {
          ...state,
          cart: newCart,
    ***REMOVED***;
  ***REMOVED***
    default:
      return state;
***REMOVED***
***REMOVED***

const CartProvider = ({ children ***REMOVED***) => {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch ***REMOVED******REMOVED***>
      {children***REMOVED***
    </CartContext.Provider>
  );
***REMOVED***

export { CartContext, CartProvider ***REMOVED***
