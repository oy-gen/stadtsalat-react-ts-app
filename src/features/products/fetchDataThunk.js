import { createAsyncThunk } from "@reduxjs/toolkit";
import { setProducts } from "./productSlice";

export const fetchDataThunk = createAsyncThunk(
  "products/fetchProducts",
  async (_, { dispatch, getState }) => {
    // const products = getState();
    const result = await fetch(
      "https://api.stadtsalat.de/shop/grosse-theaterstrasse-store"
    );
    const data = await result.json();
    // const realProducts = data.products.filter(
    //   (p) =>
    //     p.productTags.includes("product.salad") ||
    //     p.productTags.includes("product.bowl")
    // );
    // const adjustedProducts = realProducts.map((product) => ({
    //   ...product,
    //   rating: Math.floor(Math.random() * 6),
    // }));
    // setProducts(adjustedProducts);
    // dispatch(setProducts(adjustedProducts));
    dispatch(setProducts(data));
    console.log("THUNK", data);
  }
);

export default fetchDataThunk;
