import React from "react";
import { useParams } from "react-router";
//styles
import * as S from "./collection.styles";
//redux
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
//components
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = () => {
  // get the current parameter of the url
  let { collectionId } = useParams();

  const { title, items } = useSelector(selectCollection(collectionId));

  return (
    <S.CollectionPage>
      <S.Title>{title}</S.Title>
      <S.Items>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </S.Items>
    </S.CollectionPage>
  );
};

export default CollectionPage;
