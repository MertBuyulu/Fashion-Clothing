import React from "react";
import { Link } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
// styles
import "./header.styles.scss";
//logo component
import { ReactComponent as Logo } from "../../assets/crown.svg";
// firebase
import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

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
      </div>
    </nav>
  );
};

export default Header;
