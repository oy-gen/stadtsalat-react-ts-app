import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  products: [],
  likes: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addProducts: (state, action) => {
      state.products = action.payload;
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

export const { increment, decrement, addProducts, toggleLike } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const selectLikes = (state) => state.counter.likes;
export const selectProducts = (state) => state.counter.products;

export default counterSlice.reducer;
