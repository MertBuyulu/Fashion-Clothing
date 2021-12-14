// utility function to avoid rendering the same item more than once in our cart, rather we will show its quantity instead.
export const addItemToCart = (cartItems, cartItemToAdd) => {
  // find if the added cart item is already in our cart.
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // the added cart item is already in the cart, so just update its quantity and return a new array
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: ++cartItem.quantity }
        : cartItem
    );
  }

  // if the item does not exists in our cart, just append the new cart item to the end of cartItems array and return it.
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) =>
  // if the ids match, check if the item has quantity of one or more, if one then remove it from the cart
  // otherwise decrement its value by one.
  cartItems.flatMap((cartItem) => {
    return cartItem.id !== cartItemToRemove.id
      ? cartItem
      : cartItem.quantity === 1
      ? []
      : { ...cartItem, quantity: --cartItem.quantity };
  });
