import React, { useCallback } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// styles
import "./cart-icon.styles.scss";
// cartReducer toggle action function
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

const CartIcon = () => {
  const dispatch = useDispatch();
  const { itemCount } = useSelector(structuredSelector);

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

const structuredSelector = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default CartIcon;
