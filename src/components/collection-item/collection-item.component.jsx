import React from "react";
// styled components
import * as S from "./collection-item.styles.jsx";
// addItem action function
import { addItem } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;

  const dispatch = useDispatch();

  return (
    <S.CollectionItem>
      <S.Image imageUrl={imageUrl} className="image" />
      <S.CollectionFooter>
        <S.Name>{name}</S.Name>
        <S.Price>{price}</S.Price>
      </S.CollectionFooter>
      <S.AddButton onClick={() => dispatch(addItem(item))} inverted>
        Add to Cart
      </S.AddButton>
    </S.CollectionItem>
  );
};

export default CollectionItem;
