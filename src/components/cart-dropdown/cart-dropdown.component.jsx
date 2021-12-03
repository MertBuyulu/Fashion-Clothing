import React from "react";
//styles
import "./cart-dropdown.styles.scss";
// compoenents
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
//redux
import { useSelector } from "react-redux";

const CardDropDown = () => {
  // get the items added to the cart in real time
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="card-container">
      <div className="card-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CardDropDown;
