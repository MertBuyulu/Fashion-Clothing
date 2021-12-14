import React from "react";
//styles
import styled from "styled-components";
//redux
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
//components
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = () => {
  const { collections } = useSelector(structuredSelector);
  return (
    <CollectionOverviewWrapper>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewWrapper>
  );
};

const structuredSelector = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

// collection overview container
const CollectionOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CollectionsOverview;
