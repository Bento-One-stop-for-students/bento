import React from "react";

const Cart = () => {
  // push item to Cart

  const [cart, setCart] = React.useState([]);

  const findItem = (id) => {
    const itemFound = cart.findIndex((x) => x.id === id);
    return itemFound;
***REMOVED***;

  const addItemToCart = (id, name) => {
    let itemFound = findItem(id);
    if (itemFound >= 0) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 ***REMOVED*** : item
        )
      );
***REMOVED*** else {
      setCart(cart.concat({ id, amount: 1, name ***REMOVED***));
***REMOVED***
***REMOVED***;

  // pop item from Cart

  const removeItemFromCart = (id) => {
    let itemFound = findItem(id);
    if (itemFound >= 0) {
      if (cart[itemFound].amount > 1) {
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, amount: item.amount - 1 ***REMOVED*** : item
          )
        );
  ***REMOVED*** else {
        setCart([
          ...cart.slice(0, itemFound),
          ...cart.slice(itemFound + 1, cart.length),
          // cart.filter(item => item.id != id)
        ]);
  ***REMOVED***
***REMOVED*** else {
***REMOVED***
***REMOVED***
    return false;
***REMOVED***;

  const getItemCount = (id) => {
    let itemFound = findItem(id);
    if (itemFound >= 0) {
      return cart[itemFound].amount;
***REMOVED***

    return 0;
***REMOVED***;

  const getCartDetail = () => {
    return cart;
***REMOVED***;
  const cartContext = React.useMemo(() => ({
    cart,
    setCart,
    addItemToCart,
    removeItemFromCart,
    getCartDetail,
    getItemCount,
***REMOVED***));

  return { cartContext ***REMOVED***
***REMOVED***

export default Cart;
