import React from "react";
import { Link } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
// memoized selectors
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
// styles
import "./header.styles.scss";
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
    <nav role="navigation" className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <Link to="#" className="option" onClick={() => signOut(auth)}>
            SIGN OUT
          </Link>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </nav>
  );
};

const structuredSelector = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default Header;
