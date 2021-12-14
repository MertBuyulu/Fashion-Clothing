import React from "react";
// styled component
import * as S from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => {
  return <S.CustomButton {...props}>{children}</S.CustomButton>;
};

export default CustomButton;
