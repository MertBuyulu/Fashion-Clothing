import { takeLatest, call, put, all } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";

import { collection, getDocs } from "firebase/firestore";

import {
  convertCollectionToMap,
  firestore,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

// all generator functions must have yield inside of them.
// saga middleware wants to run all sagas concurrently.
export function* fetchCollectionsAsync() {
  try {
    const collectionRef = collection(firestore, "collections");
    const snapShot = yield getDocs(collectionRef);
    const collectionsMap = yield call(convertCollectionToMap, snapShot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

//We use takeEvery to start a new fetchCollectionsAsync task on each dispatched FETCH_COLLECTIONS_START action
export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
