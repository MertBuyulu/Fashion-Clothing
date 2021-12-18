import React from "react";
import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

import { useNavigate } from "react-router";

const ReceivedMessage = () => {
  const navigate = useNavigate();
  return (
    <ReceivedMessageWrapper>
      <h1>
        Your message has been sent.
        <br />
        You can expect a call back
        <br /> regarding to your message in
        <br /> the next 24 hours.
        <br />
        Thank you!
      </h1>
      <ReturnButton onClick={() => navigate("/")}>
        RETURN TO HOMEPAGE
      </ReturnButton>
    </ReceivedMessageWrapper>
  );
};

const ReceivedMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-align: center;
  margin: 100px auto;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

const ReturnButton = styled(CustomButton)`
  min-width: 20vw;
`;

export default ReceivedMessage;
