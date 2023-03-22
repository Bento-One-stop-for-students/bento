import React from "react";

const initialState = {
  cart: {},
};

const CartContext = React.createContext({});

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
              }
            : {
                ...action.payload,
                qty: 1,
              },
        },
      };
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
            },
          },
        };
      } else {
        let newCart = { ...cartState.cart };
        delete newCart[action.payload.id];
        return {
          ...cartState,
          cart: newCart,
        };
      }
    case "REMOVE_FROM_CART":
      let newCart = { ...cartState.cart };
      delete newCart[action.payload.id];
      return {
        ...cartState,
        cart: newCart,
      };
    case "EMPTY_CART":
      return { cart: {} };
    default:
      return cartState;
  }
}

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = React.useReducer(cartReducer, initialState);
  const value = React.useMemo(() => ({ cartState, cartDispatch }), [cartState, cartDispatch]);
  return (
    <CartContext.Provider value={{ value }}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
