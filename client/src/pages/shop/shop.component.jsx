import React, { useEffect } from "react";

// react routing
import { Route, Routes } from "react-router-dom";

// components
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";

// redux-saga
import { fetchCollectionStart } from "../../redux/shop/shop.actions";

// HOC (high order component)
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = () => {
  const { isCollectionFetching, isCollectionsLoaded } =
    useSelector(structuredSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} />
        }
      />
      <Route
        path=":collectionId"
        element={<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} />}
      />
    </Routes>
  );
};

const structuredSelector = createStructuredSelector({
  selectIsCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

export default ShopPage;
