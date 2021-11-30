import React from "react";
// styles
import "./sign-in-and-sign-up.styles.scss";

import SignIn from "../../components/sign-in/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SingInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SingInAndSignUpPage;
