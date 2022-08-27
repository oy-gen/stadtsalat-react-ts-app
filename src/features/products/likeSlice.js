import { createSlice } from "@reduxjs/toolkit";
import toggleLikesReducer from "./toggleLikesReducer";

const initialState = {
  likes: [],
};

export const likeSlice = createSlice({
  name: "likesToggle",
  initialState,

  reducers: {
    toggleLike: toggleLikesReducer,
  },
});

export const { toggleLike } = likeSlice.actions;

export const selectLikes = (state) => state.likes.likes;

export default likeSlice.reducer;
