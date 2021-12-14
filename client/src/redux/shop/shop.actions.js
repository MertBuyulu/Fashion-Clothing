import ShopActionTypes from "./shop.types";

import { collection, getDocs } from "firebase/firestore";
import {
  convertCollectionToMap,
  firestore,
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = collection(firestore, "collections");
    dispatch(fetchCollectionStart());

    // fetch the collections
    getDocs(collectionRef)
      .then((snapshot) => {
        const collectionsMap = convertCollectionToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
