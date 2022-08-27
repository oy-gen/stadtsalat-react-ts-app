import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProducts } from "./dataSlice";

export const fetchDataThunk = createAsyncThunk(
  "fetchProducts",
  async (_, dispatch ) => {
    fetch("https://api.stadtsalat.de/shop/grosse-theaterstrasse-store")
      .then((response) => response.json())
      .then((data) => dispatch(addProducts(data)));
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
  }
);

export default fetchDataThunk;
