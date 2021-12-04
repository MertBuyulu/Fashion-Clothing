import React from "react";
//styles
import "./checkout-item.styles.scss";
// redux
import { useDispatch } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem }) => {
  const { id, name, price, imageUrl, quantity } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div
          className="arrow"
          role="button"
          onClick={() => dispatch(removeItem(cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          role="button"
          onClick={() => dispatch(addItem(cartItem))}
        >
          &#10095;
        </div>
      </div>
      <span className="price">{price}</span>
      <div
        className="remote-button"
        onClick={() => dispatch(clearItemFromCart(id))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
