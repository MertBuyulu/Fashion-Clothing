import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {/* children props will display whatever is being passed inside of CustomButton component. 
          In our case it is the text we will display inside of our button container*/}
      {children}
    </button>
  );
};

export default CustomButton;
