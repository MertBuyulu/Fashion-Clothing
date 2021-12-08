import React from "react";
// style
import "./checkout.styles.scss";
// components
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
// redux
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
// cart selectors
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

const CheckOutPage = () => {
  const { cartItems, total } = useSelector(structuredSelector);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <button>Pay Now</button>
    </div>
  );
};

const structuredSelector = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default CheckOutPage;
