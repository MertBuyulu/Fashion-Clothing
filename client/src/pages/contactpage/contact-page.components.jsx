import React from "react";
import styled from "styled-components";
// components
import Contact from "../../components/contact/contact.component";

const ContactPage = () => {
  return (
    <ContactPageWrapper>
      <Contact />
    </ContactPageWrapper>
  );
};

const ContactPageWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

export default ContactPage;
