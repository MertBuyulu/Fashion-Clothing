import React from "react";
// styled components
import * as S from "./collection-preview.styles";
//components
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <S.CollectionPreview>
      <S.Title>{title.toUpperCase()}</S.Title>
      <S.PreviewItems>
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </S.PreviewItems>
    </S.CollectionPreview>
  );
};

export default CollectionPreview;
