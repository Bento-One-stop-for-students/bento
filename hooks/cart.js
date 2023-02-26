import React from "react";

const Cart = () => {
  // push item to Cart

  const [cart, setCart] = React.useState([]);

  const findItem = (id) => {
    const itemFound = cart.findIndex((x) => x.id === id);
    return itemFound;
  };

  const addItemToCart = (id) => {
    let itemFound = findItem(id);
    if (itemFound >= 0) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        )
      );
    } else {
      setCart(cart.concat({ id, amount: 1 }));
    }
  };

  // pop item from Cart

  const removeItemFromCart = (id) => {
    let itemFound = findItem(id);
    if (itemFound >= 0) {
      if (cart[itemFound].amount > 0) {
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, amount: item.amount - 1 } : item
          )
        );
      } else {
        setCart([
          ...cart.slice(0, itemFound),
          ...cart.slice(itemFound + 1, carts.length),
        ]);
      }
    } else {
      return false;
    }
    return false;
  };

  const getItemCount = (id) => {
    let itemFound = findItem(id);
    if (itemFound >= 0) {
      return cart[itemFound].amount;
    }

    return 0;
  };

  const getCartDetail = () => {
    return cart;
  };
  const cartContext = React.useMemo(() => ({
    cart,
    setCart,
    addItemToCart,
    removeItemFromCart,
    getCartDetail,
    getItemCount,
  }));

  return { cartContext };
};

export default Cart;
