import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { productAddAction, productDelete } from "./tools/actions/productAction";
import configureStore from "./tools/store/configureStore";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App.jsx";
import { Provider } from "react-redux";


const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  productAddAction({
    id: 1,
    title: "Oat Loaf",
    price: 1.6,
    category: "Bread & Grains",
  }),
);
store.dispatch(
  productAddAction({
    id: 2,
    title: "French Rustic",
    price: 2.4,
    category: "French Rustic bread",
  }),
);
store.dispatch(
  productAddAction({
    id: 3,
    title: "chocolate croissant",
    price: 2.8,
    category: "Chocolate pastries",
  }),
);
// store.dispatch(productFind(1));
// store.dispatch(productFilter("Chocolate pastries"));
store.dispatch(productDelete(1));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
