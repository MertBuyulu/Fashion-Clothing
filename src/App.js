import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop/hats" element={<Hats />} />
    </Routes>
  );
}

const Hats = (props) => {
  console.log(props);
  return <h1>WELCOME TO THE HATS PAGE</h1>;
};

export default App;
