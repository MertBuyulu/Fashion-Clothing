import React from "react";

import styled from "styled-components";

import SignIn from "../../components/sign-in/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SingInAndSignUpPage = () => {
  return (
    <SignInSignUpWrapper>
      <SignIn />
      <SignUp />
    </SignInSignUpWrapper>
  );
};

const SignInSignUpWrapper = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;

export default SingInAndSignUpPage;
