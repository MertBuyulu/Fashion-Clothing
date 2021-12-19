import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
// signInWithRedirect does not give user closed the pop up error
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  writeBatch,
} from "firebase/firestore";

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

// utility function to create collections with multiple documents in one request
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(firestore);
  const newDocRef = collection(firestore, collectionKey);

  // iterate over each collection inside of collection cluster and add it to the data base
  objectsToAdd.forEach((obj) => {
    const docRef = doc(newDocRef);
    batch.set(docRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { items, title } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  // this will create one big object consisting the individual collection
  // objects we get back from collections.docs.map above
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {}); // {} means the initial value of accumulator is an empty object
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompts: "select_account" });
