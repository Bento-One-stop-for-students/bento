import React from "react";

const initialState = {
  cart: {***REMOVED***,
***REMOVED***

const CartContext = React.createContext({***REMOVED***

function cartReducer(cartState, action) {
  let item;
  switch (action.type) {
    case "ADD_TO_CART":
      item = cartState.cart[action.payload.id];
      return {
        ...cartState,
        cart: {
          ...cartState.cart,
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
    case "REDUCE_FROM_CART":
      item = cartState.cart[action.payload.id];
      if (item.qty > 1) {
        return {
          ...cartState,
          cart: {
            ...cartState.cart,
            [action.payload.id]: {
              ...item,
              qty: item.qty - 1,
        ***REMOVED***,
      ***REMOVED***,
    ***REMOVED***;
  ***REMOVED*** else {
        let newCart = { ...cartState.cart ***REMOVED***
        delete newCart[action.payload.id];
        return {
          ...cartState,
          cart: newCart,
    ***REMOVED***;
  ***REMOVED***
    case "REMOVE_FROM_CART":
      let newCart = { ...cartState.cart ***REMOVED***
      delete newCart[action.payload.id];
      return {
        ...cartState,
        cart: newCart,
  ***REMOVED***;
    case "EMPTY_CART":
      return { cart: {***REMOVED*** ***REMOVED***
    default:
      return cartState;
***REMOVED***
***REMOVED***

const CartProvider = ({ children ***REMOVED***) => {
  const [cartState, cartDispatch] = React.useReducer(cartReducer, initialState);
  const value = React.useMemo(() => ({ cartState, cartDispatch ***REMOVED***), [cartState, cartDispatch]);
  return (
    <CartContext.Provider value={{ value ***REMOVED******REMOVED***>{children***REMOVED***</CartContext.Provider>
  );
***REMOVED***

export { CartContext, CartProvider ***REMOVED***
