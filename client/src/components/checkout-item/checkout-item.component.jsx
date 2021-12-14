import React from "react";
//styles
import * as S from "./checkout-item.styles";
// redux
import { useDispatch } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem }) => {
  const { id, name, price, imageUrl, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <S.CheckoutItem>
      <S.ImageWrapper>
        <img src={imageUrl} alt={name} />
      </S.ImageWrapper>
      <S.Text>{name}</S.Text>
      <S.Quantity>
        <div role="button" onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </div>
        <span>{quantity}</span>
        <div role="button" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </S.Quantity>
      <S.Text>{price}</S.Text>
      <S.RemoveButton
        role="button"
        onClick={() => dispatch(clearItemFromCart(id))}
      >
        &#10005;
      </S.RemoveButton>
    </S.CheckoutItem>
  );
};

export default CheckoutItem;
