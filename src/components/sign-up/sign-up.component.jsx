import React, { useState } from "react";
//styles
import styled from "styled-components";
// components
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
// user action
import { signUpStart } from "../../redux/user/user.actions";
//redux
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, displayName, password, confirmPassword } = newUser;
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match!");
      return;
    }
    dispatch(signUpStart({ email, password, displayName }));
    // reset the state
    setNewUser({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <SignUpForm>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          id="name"
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          id="email-signup"
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          id="password-signup"
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpForm>
  );
};

const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

export default SignUp;
