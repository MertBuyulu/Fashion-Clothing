import React from "react";
//styles
import "./card-dropdown.styles.scss";
// compoenents
import CustomButton from "../custom-button/custom-button.component";

const CardDropDown = () => {
  return (
    <div className="card-container">
      <div className="card-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CardDropDown;
