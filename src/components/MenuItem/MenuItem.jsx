import React from "react";
import "./MenuItem.scss";

const MenuItem = (props) => {
  const { title, imageUrl, size } = props;
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${size} menu__item`}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
