import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// signInWithRedirect does not give user closed the pop up error
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCRYsDOZ4_Pi9JPVjNHRyFDP5A0RVk9Zyo",
  authDomain: "ecommerce-db-fdef6.firebaseapp.com",
  projectId: "ecommerce-db-fdef6",
  storageBucket: "ecommerce-db-fdef6.appspot.com",
  messagingSenderId: "378444362884",
  appId: "1:378444362884:web:e45424fcdd2e91dcf67ed1",
};

initializeApp(config);

export const firestore = getFirestore();
export const auth = getAuth();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if the user is not signed in run the code below.
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompts: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
