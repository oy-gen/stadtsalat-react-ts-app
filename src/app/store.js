import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
// import productReducer from "../features/products/productSlice";
//import likeReducer from "../features/products/likeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // likes: likeReducer,
   // products: productReducer,
  },
});
