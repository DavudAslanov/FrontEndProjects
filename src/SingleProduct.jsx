import React from "react";

const SingleProduct = ({ title, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p>{title}</p>
      <h4>{price}$</h4>
    </div>
  );
};

// 12- 3/9
export default SingleProduct;
