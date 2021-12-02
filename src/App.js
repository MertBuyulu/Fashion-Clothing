import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// styles
import "./App.css";
// user action function
import { setCurrentUser } from "./redux/user/user.actions";
// redux with hooks
import { useDispatch } from "react-redux";
// firebase related imports
import { auth, createUserProfileDocument } from "./firebase//firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
// pages
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSignUpPage from "./pages/sing-in and sign-up page/sign-in-and-sign-up.component";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // Now calls `onSnapshot` as a function; DocumentReference passed as first argument
        // and callback function is now the second argument
        const unsubscribeFromSnapshot = onSnapshot(userRef, (snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
          // detach the listener
          unsubscribeFromSnapshot();
        });
        // user is not signed in, so set its state to be null (userAuth is null)
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

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
