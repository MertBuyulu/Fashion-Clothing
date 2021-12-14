import React from "react";
//styled components
import * as S from "./cart-item.styles";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  //const { name, imageUrl, price, quantity } = item;
  return (
    <S.CartItem>
      <S.ItemImage src={imageUrl} alt={name} />
      <S.ItemDetails>
        <span className="name">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </S.ItemDetails>
    </S.CartItem>
  );
};

export default CartItem;
