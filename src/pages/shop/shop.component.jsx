import React, { useEffect, useState } from "react";
// react routing
import { Route, Routes } from "react-router-dom";
// components
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
// firebase
import {
  firestore,
  convertCollectionToMap,
} from "../../firebase/firebase.utils";
import { collection, onSnapshot } from "firebase/firestore";
// redux
import { useDispatch } from "react-redux";
import { UpdateCollections } from "../../redux/shop/shop.actions";

// HOC (high order component)
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = (props) => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = collection(firestore, "collections");

    // onShapshot returns a call back funtion to remove the listener
    const unsubscribeFromSnapshot = onSnapshot(collectionRef, (snapshot) => {
      const collectionsMap = convertCollectionToMap(snapshot);
      dispatch(UpdateCollections(collectionsMap));
      // the data's loaded so set loading to false
      setLoading(false);
    });

    return () => unsubscribeFromSnapshot();
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Routes>
        <Route
          path="/"
          element={
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          }
        />
        <Route
          path=":collectionId"
          element={<CollectionPageWithSpinner isLoading={loading} {...props} />}
        />
      </Routes>
    </div>
  );
};

export default ShopPage;
