import React from "react";

// const Cart = () => {
//   // push item to Cart

//   const [cart, setCart] = React.useState([]);

//   const findItem = (id) => {
//     const itemFound = cart.findIndex((x) => x.id === id);
//     return itemFound;
//   };

//   const addItemToCart = (item) => {
//     let itemFound = findItem(item.id);
//     if (itemFound >= 0) {
//       setCart(
//         cart.map((x) => (x.id === item.id ? { ...x, amount: x.amount + 1 } : x))
//       );
//     } else {
//       setCart(
//         cart.concat({
//           id: item.id,
//           amount: 1,
//           name: item.name,
//           price: item.price,
//         })
//       );
//     }
//   };

//   // pop item from Cart

//   const removeItemFromCart = (id) => {
//     let itemFound = findItem(id);
//     if (itemFound >= 0) {
//       if (cart[itemFound].amount > 1) {
//         setCart(
//           cart.map((item) =>
//             item.id === id ? { ...item, amount: item.amount - 1 } : item
//           )
//         );
//       } else {
//         setCart([
//           ...cart.slice(0, itemFound),
//           ...cart.slice(itemFound + 1, cart.length),
//           // cart.filter(item => item.id != id)
//         ]);
//       }
//     } else {
//       return false;
//     }
//     return false;
//   };

//   const getItemCount = (id) => {
//     let itemFound = findItem(id);
//     if (itemFound >= 0) {
//       return cart[itemFound].amount;
//     }

//     return 0;
//   };

//   const getCartDetail = () => {
//     return cart;
//   };
//   const cartContext = React.useMemo(() => ({
//     cart,
//     setCart,
//     addItemToCart,
//     removeItemFromCart,
//     getCartDetail,
//     getItemCount,
//   }));

//   return { cartContext };
// };

// export default Cart;

const initialState = {
  cart: {},
};

const CartContext = React.createContext({});

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
              }
            : {
                ...action.payload,
                qty: 1,
              },
        },
      };
    case "REMOVE_FROM_CART":
      if (item.qty > 1) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [action.payload.id]: {
              ...item,
              qty: item.qty - 1,
            },
          },
        };
      } else {
        let newCart = { ...state.cart };
        delete newCart[action.payload.id];
        return {
          ...state,
          cart: newCart,
        };
      }
    default:
      return state;
  }
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
