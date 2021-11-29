import { useState, useEffect } from "react";
import { auth } from "./firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

export const useGoogleUser = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return currentUser;
};
