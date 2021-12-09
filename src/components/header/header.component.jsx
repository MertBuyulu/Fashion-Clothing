import React from "react";
// redux
import { useSelector } from "react-redux";
// memoized selectors
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
// styled components
import * as S from "./header.styles";
//logo component
import { ReactComponent as Logo } from "../../assets/crown.svg";
// firebase
import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";
// components
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const Header = () => {
  const { currentUser, hidden } = useSelector(structuredSelector);

  return (
    <S.Navigation role="navigation">
      <S.LogoBox to="/">
        <Logo />
      </S.LogoBox>
      <S.NavLinks>
        <S.NavLink to="/shop">SHOP</S.NavLink>
        <S.NavLink to="/contact">CONTACT</S.NavLink>
        {currentUser ? (
          <S.NavLink to="#" onClick={() => signOut(auth)}>
            SIGN OUT
          </S.NavLink>
        ) : (
          <S.NavLink to="/signin">SIGN IN</S.NavLink>
        )}
        <CartIcon />
      </S.NavLinks>
      {hidden ? null : <CartDropDown />}
    </S.Navigation>
  );
};

const structuredSelector = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default Header;
