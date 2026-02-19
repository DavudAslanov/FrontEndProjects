import { combineReducers, createStore } from "redux";
import { productReducer } from "../reducers/productReducer";
import { categoryReducer } from "../reducers/categoryReducer";

const configureStore = () => {
  const store = createStore(combineReducers({
    product:productReducer,
    category:categoryReducer
  }));
  return store;
};
//birden cox state configureStore icinde tanimalamaq istiyirikse CombineReducersden istifade edirik 
//Store iki dene edile bilmir ama store icinde 2 deneden coxda state yaradila bilir 

// const configureStore = () => {
//   const store = createStore(productReducer);
//   return store;
// };

// tek state oldugunda bele yazilir 

export default configureStore;
