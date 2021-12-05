import React from "react";
//styles
import "./collection-overview.styles.scss";
//redux
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
//components
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = () => {
  const { collections } = useSelector(structuredSelector);
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const structuredSelector = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default CollectionsOverview;
