import React, { useEffect } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
// styles
import { GlobalStyle } from "./global.styles";
// userReducer action function
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";
// redux with hooks
import { useDispatch, useSelector } from "react-redux";
// pages
import CheckOutPage from "./pages/checkout/checkout.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSignUpPage from "./pages/sing-in and sign-up page/sign-in-and-sign-up.component";
import ErrorPage from "./pages/error-page/error-page.component";
import ContactPage from "./pages/contactpage/contact-page.components";

function App() {
  const { currentUser } = useSelector(structuredSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    // <Route> paths match exactly by default.\
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop/*" element={<ShopPage />} />
          <Route path="checkout" element={<CheckOutPage />} />
          <Route
            path="signin"
            element={
              currentUser ? <Navigate to="/" /> : <SingInAndSignUpPage />
            }
          />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

const structuredSelector = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default App;
