import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./Preview_collection.scss";

const Preview_Collection = (props) => {
  const { title, items } = props;
  return (
    <div className="Preview__Collection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default Preview_Collection;
