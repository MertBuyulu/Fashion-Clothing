import React from "react";
//styles
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { name, price, imageUrl, quantity } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remote-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
