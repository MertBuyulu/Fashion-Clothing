import React, { useCallback } from "react";
// styled components
import * as S from "./cart-icon.styles";
// cartReducer toggle action function
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

const CartIcon = () => {
  const dispatch = useDispatch();
  const { itemCount } = useSelector(structuredSelector);

  return (
    <S.CartIcon
      onClick={useCallback(() => dispatch(toggleCartHidden()), [dispatch])}
    >
      <S.ShoppingIcon />
      <S.ItemCount>{itemCount}</S.ItemCount>
    </S.CartIcon>
  );
};

const structuredSelector = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default CartIcon;
