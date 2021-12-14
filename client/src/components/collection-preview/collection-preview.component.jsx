import React from "react";
// styled components
import * as S from "./collection-preview.styles";
//components
import CollectionItem from "../collection-item/collection-item.component";
import { useNavigate } from "react-router";

const CollectionPreview = ({ title, items, routeName }) => {
  const navigate = useNavigate();

  return (
    <S.CollectionPreview>
      <S.Title onClick={() => navigate(`../${routeName}`)}>
        {title.toUpperCase()}
      </S.Title>
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
