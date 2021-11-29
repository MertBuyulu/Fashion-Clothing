import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCRYsDOZ4_Pi9JPVjNHRyFDP5A0RVk9Zyo",
  authDomain: "ecommerce-db-fdef6.firebaseapp.com",
  projectId: "ecommerce-db-fdef6",
  storageBucket: "ecommerce-db-fdef6.appspot.com",
  messagingSenderId: "378444362884",
  appId: "1:378444362884:web:e45424fcdd2e91dcf67ed1",
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompts: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
