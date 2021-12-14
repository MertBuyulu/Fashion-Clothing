import React from "react";
// styled components
import * as S from "./menu-item.styles";
//redux
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  return (
    <S.MenuItem size={size} onClick={() => navigate(`${linkUrl}`)}>
      <S.BackGroundImage imageUrl={imageUrl} />
      <S.Content>
        <S.Title>{title.toUpperCase()}</S.Title>
        <S.SubTitle>SHOP NOW</S.SubTitle>
      </S.Content>
    </S.MenuItem>
  );
};

export default MenuItem;
