import React from "react";
// react-router-dom
import { useNavigate } from "react-router";
//styles
import "./cart-dropdown.styles.scss";
// compoenents
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
//redux
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CardDropDown = () => {
  const navigate = useNavigate();
  // get the items added to the cart in real
  const { cartItems } = useSelector(structuredSelector);
  const dispatch = useDispatch();

  return (
    <div className="card-container">
      <div className="card-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const structuredSelector = createStructuredSelector({
  cartItems: selectCartItems,
});

export default CardDropDown;
