import { , createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchDataThunk from "./fetchDataThunk";
import setDataReducer from "./setDataReducer";

const initialState = {
  loading:false,
  products: [],
  error:'',
};

export const incrementAsync = createAsyncThunk(
  "products/fetchProducts2",
  async (data) => {
    const response = await fetchDataThunk(data);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);




export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: setDataReducer,
  },
});

export const setProducts = productSlice.actions;
export const selectProducts = (state) => state.products;

export default productSlice.reducer;
