import CartActionTypes from "./cart.types";

// payload is optional argument to an action function
export const toggleCardHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
