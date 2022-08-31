import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  likes: [],
  images: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
    addImages: (state, action) => {
      state.images = action.payload;
    },
    toggleLike: (state, action) => {
      if (state.likes.includes(action.payload)) {
        state.likes = state.likes.filter((id) => action.payload !== id);
      } else {
        state.likes = [...state.likes, action.payload];
      }
    },
  },
});

export const { addProducts, addImages, toggleLike } = dataSlice.actions;

export const showLikes = (state) => state.data.likes;
export const showProducts = (state) => state.data.products;
export const showImages = (state) => state.data.images;

export default dataSlice.reducer;
