import React from "react";
// styled components
import * as S from "./checkout.styles";
// components
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
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
    <S.CheckoutPage>
      <S.CheckoutHeader>
        <S.HeaderBlock>
          <span>Product</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Description</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Quantity</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Price</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Remove</span>
        </S.HeaderBlock>
      </S.CheckoutHeader>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <S.Message>
          Your cart is empty...
          <br />
          Please add items to enable pay option.
        </S.Message>
      )}

      <S.TotalCost>
        {cartItems.length ? <span>TOTAL: ${total}</span> : ""}
      </S.TotalCost>
      {cartItems.length ? (
        <S.Warning>
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
        </S.Warning>
      ) : (
        ""
      )}
      <S.PayButton>
        <StripeCheckoutButton price={total} />
      </S.PayButton>
    </S.CheckoutPage>
  );
};

const structuredSelector = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default CheckOutPage;
