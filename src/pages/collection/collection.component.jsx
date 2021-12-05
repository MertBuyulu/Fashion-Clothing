import React from "react";
import { useParams } from "react-router";
//styles
import "./collection.styles.scss";
//redux
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
//components
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = () => {
  // get the current parameter of the url
  let { collectionId } = useParams();

  const { title, items } = useSelector(selectCollection(collectionId));

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
