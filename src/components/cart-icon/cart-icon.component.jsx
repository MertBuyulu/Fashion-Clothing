import React, { useCallback } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// styles
import "./cart-icon.styles.scss";
// cartReducer toggle action function
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { useDispatch, useSelector } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => selectCartItemsCount(state));

  return (
    <div
      className="card-icon"
      onClick={useCallback(() => dispatch(toggleCartHidden()), [dispatch])}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
