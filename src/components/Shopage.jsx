import React, { useEffect, useState } from "react";
import Products from "./Products";
import Sidebar from "./Sidebar";
import axios from "axios";

const Shopage = () => {
  const [selectedCat, setSelectedCat] = useState("");

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/f93676b7-85c8-49ad-ae52-a7be970afa5e")
      .then((res) => setProductsData(res.data));
  }, []);

  const CategoryChange = (category) => {
    setSelectedCat((prev) => (prev === category ? "" : category));
  };

  const filterProduct =
    selectedCat === ""
      ? productsData
      : productsData.filter((p) => p.category === selectedCat);

  return (
    <div className="shop" style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <Sidebar
              selectedCat={selectedCat}
              onCategoryChange={CategoryChange}
            />
          </div>

          <div className="col-12 col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <Products products={filterProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopage;
