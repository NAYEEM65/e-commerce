import React from "react";
import "./CollectionItem.scss";

const CollectionItem = (props) => {
  const { id, name, price, imageUrl } = props;
  console.log(imageUrl);
  return (
    <div className="collection__item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection__footer">
        <span className="name">{name}</span>
        <span className="price"> ${price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
