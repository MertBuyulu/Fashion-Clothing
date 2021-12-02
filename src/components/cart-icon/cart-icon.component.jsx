import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// styles
import "./cart-icon.styles.scss";
// cartReducer toggle action function
import { toggleCardHidden } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();

  return (
    <div className="card-icon" onClick={() => dispatch(toggleCardHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
