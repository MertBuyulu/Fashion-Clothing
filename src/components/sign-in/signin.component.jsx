import React from "react";

import styled from "styled-components";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import signin functionality from firebase
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err.message);
    }
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <SignInForm>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            id="email"
            type="email"
            name="email"
            label="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            id="password"
            type="password"
            name="password"
            label="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <SignInButtons>
            <CustomButton type="submit" onClick={this.resetState}>
              Sign In
            </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </SignInButtons>
        </form>
      </SignInForm>
    );
  }
}

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
