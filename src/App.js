import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// styles
import "./App.css";
// pages
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSignUpPage from "./pages/sing-in and sign-up page/sign-in-and-sign-up.component";

import { useGoogleUser } from "./firebase/custom-hooks";

function App() {
  const currentUser = useGoogleUser();
  //console.log(currentUser);

  return (
    // <Route> paths match exactly by default.\
    <Router>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SingInAndSignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
