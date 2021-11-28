import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSignUpPage from "./pages/sing-in and sign-up page/sign-in-and-sign-up.component";

function App() {
  return (
    // <Route> paths match exactly by default.\
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SingInAndSignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
