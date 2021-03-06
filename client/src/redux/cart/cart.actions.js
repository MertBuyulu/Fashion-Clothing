import CartActionTypes from "./cart.types";

// payload is optional argument to an action function
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (id) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: id,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
