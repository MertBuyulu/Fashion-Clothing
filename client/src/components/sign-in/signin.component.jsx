import React, { useState } from "react";
// styles
import styled from "styled-components";
// components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
// redux
import { useDispatch } from "react-redux";
// redux sagas
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const { email, password } = state;

  const handleChange = (event) => {
    const { value, name } = event.target;
    // if we dont spread the state, we will create an object with one property
    // instead of two; email and password.
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(emailSignInStart(state));
  };

  return (
    <SignInForm>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          id="email"
          type="email"
          name="email"
          label="email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          id="password"
          type="password"
          name="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <SignInButtons>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={() => dispatch(googleSignInStart())}
          >
            Sign in with Google
          </CustomButton>
        </SignInButtons>
      </form>
    </SignInForm>
  );
};

const SignInForm = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const SignInButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default SignIn;
