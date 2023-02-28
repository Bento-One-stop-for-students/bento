import React from "react";

const Cart = () => {
  // push item to Cart

  const [cart, setCart] = React.useState([]);

  const findItem = (id) => {
    const itemFound = cart.findIndex((x) => x.id === id);
    return itemFound;
  };

  const addItemToCart = (item) => {
    let itemFound = findItem(item.id);
    if (itemFound >= 0) {
      setCart(
        cart.map((x) => (x.id === item.id ? { ...x, amount: x.amount + 1 } : x))
      );
    } else {
      setCart(
        cart.concat({
          id: item.id,
          amount: 1,
          name: item.name,
          price: item.price,
        })
      );
    }
  };

  // pop item from Cart

  const removeItemFromCart = (id) => {
    let itemFound = findItem(id);
    if (itemFound >= 0) {
      if (cart[itemFound].amount > 1) {
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, amount: item.amount - 1 } : item
          )
        );
      } else {
        setCart([
          ...cart.slice(0, itemFound),
          ...cart.slice(itemFound + 1, cart.length),
          // cart.filter(item => item.id != id)
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
