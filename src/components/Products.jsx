import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct";
import "../style/singleproduct.css"

const Products = ({ products }) => {
  // Burda bizim shoppage-den oturduyumuz props var- full productlar onlari cagirmisiq

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          {products.map((item) => (
           <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
             <SingleProduct
              key={item.id}
              price={item.price}
              title={item.name}
              image={item.image}
            />
           </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
