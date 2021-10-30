import React, { Component } from "react";
import PreviewCollection from "../../components/Preview_Collection/Preview_Collection";
import SHOP_DATA from "./ShopData";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <div className="shop__page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
