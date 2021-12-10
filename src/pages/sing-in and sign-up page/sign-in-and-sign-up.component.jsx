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
`;

export default SingInAndSignUpPage;
