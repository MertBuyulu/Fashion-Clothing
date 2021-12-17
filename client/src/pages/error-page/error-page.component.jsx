import React from "react";
// router-dom v6
import { useNavigate } from "react-router";

import styled from "styled-components";
import { CustomButton } from "../../components/custom-button/custom-button.styles";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorPageWrapper>
      <h1>PATH IS NOT AVAILABLE!</h1>
      <ReturnButton onClick={() => navigate("/")}>
        RETURN TO HOMEPAGE
      </ReturnButton>
    </ErrorPageWrapper>
  );
};

const ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 27px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const ReturnButton = styled(CustomButton)`
  min-width: 20vw;
`;

export default ErrorPage;
