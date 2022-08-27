import { createSlice } from "@reduxjs/toolkit";

import setProductsReducer from "./setProductsReducer";

const initialState = {
  products: [],
  likes: [],
};

export const productSlice = createSlice({
  name: "Data",
  initialState,
  reducers: {
    setUpProducts: setProductsReducer,
  },
});

export const setUpProducts = productSlice.actions;
export const selectProducts = (state) => state.products;

export default productSlice.reducer;

// export const incrementAsync = createAsyncThunk(
//   "fetchProducts2",
//   async (data) => {
//     const response = fetchDataThunk(data);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );
