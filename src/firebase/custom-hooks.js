import { useState, useEffect } from "react";
// firebase related imports
import { auth, createUserProfileDocument } from "./firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";

export const useGoogleUser = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // Now calls `onSnapshot` as a function; DocumentReference passed as first argument
        // and callback function is now the second argument
        const unsubscribeFromSnapshot = onSnapshot(userRef, (snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
          // detach the listener
          unsubscribeFromSnapshot();
        });
        // user is not signed in, so set its state to be null (userAuth is null)
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  console.log(currentUser);
  return currentUser;
};
