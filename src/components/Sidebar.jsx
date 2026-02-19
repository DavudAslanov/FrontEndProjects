import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/sidebar.css";

const Sidebar = ({ selectedCat, onCategoryChange }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/9c573cb7-7360-41fb-a651-f8a8ce9e47f4")
      .then((res) => setCategory(res.data));
  }, []);

  return (
    <div className="sidebar">
      <h3>Categories</h3>

      {category.map((cat) => (
        <div className="sidebar-items">
          <label key={cat.id} className="checkbox-item">
            <br />
            <input
              type="checkbox"
              checked={selectedCat === cat.name}
              onChange={() => onCategoryChange(cat.name)}
            />
            {cat.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
