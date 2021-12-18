import React, { useState } from "react";
import styled from "styled-components";

//components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import ReceivedMessage from "./inform-user.component";

const Contact = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [received, setReceived] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput({ fullName: "", email: "", phoneNumber: "", message: "" });
    setReceived(!received);
  };
  const { email, fullName, phoneNumber, message } = input;

  return (
    <>
      {!received ? (
        <ContactForm>
          <HeaderText>Contact Us</HeaderText>
          <form onSubmit={handleSubmit}>
            <FormInput
              id="name"
              type="text"
              name="fullName"
              label="Full Name"
              value={fullName}
              onChange={handleChange}
              required
            />
            <FormInput
              id="email"
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={handleChange}
              required
            />
            <FormInput
              id="phone"
              type="tel"
              name="phoneNumber"
              label="Phone Number - XXX-XXX-XXX"
              value={phoneNumber}
              pattern={`[0-9]{3}-[0-9]{3}-[0-9]{3}`}
              onChange={handleChange}
              required
            />
            <FormInput
              id="message"
              type="text"
              name="message"
              label="Enter Your Message Here"
              value={message}
              onChange={handleChange}
              required
              textArea
            />
            <CustomButton type="submit">SEND NOW</CustomButton>
          </form>
        </ContactForm>
      ) : (
        <ReceivedMessage />
      )}
    </>
  );
};

const ContactForm = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  margin: auto;
  button {
    position: absolute;
    left: 100px;
  }

  @media screen and (max-width: 400px) {
    width: 360px;
  }
`;

const HeaderText = styled.h2`
  align-self: center;
  font-size: 35px;
`;

export default Contact;
