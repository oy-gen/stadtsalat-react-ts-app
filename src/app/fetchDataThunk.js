import { createAsyncThunk } from "@reduxjs/toolkit";
import { parseProducts, parseImages } from "./parseData";
import { addProducts, showProducts } from "./dataSlice";

const fetchDataThunk = createAsyncThunk("data/fetchData", async () => {
  const result = await fetch(
    "https://api.stadtsalat.de/shop/grosse-theaterstrasse-store/"
  );
  const data = await result.json();
  const parsedProducts = parseProducts(data);
  return parsedProducts;
});

export default fetchDataThunk;
