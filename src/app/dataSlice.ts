import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  likes: [],
  images: [],
  modal: false,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      const data = action.payload;
      const realProducts = data.products.filter(
        (product) =>
          product.productTags.includes("product.salad") ||
          product.productTags.includes("product.bowl")
      );
      const productsWithRating = realProducts.map((product) => ({
        ...product,
        rating: Math.ceil(Math.random() * 5),
      }));
      state.products = productsWithRating;
    },
    setImages: (state, action) => {
      const products = action.payload;
      const images = products.map((product) => ({
        url: `https://static.stadtsalat.de/shop/image/${product.image}`,
        name: product.name,
      }));
      state.images = images;
    },
    toggleLike: (state, action) => {
      if (state.likes.includes(action.payload)) {
        state.likes = state.likes.filter((id) => action.payload !== id);
      } else {
        state.likes = [...state.likes, action.payload];
      }
    },
    toggleModal: (state, action) => {
      !state.modal ? (state.modal = action.payload) : (state.modal = false);
    },
  },
});

export const { setProducts, setImages, toggleLike, toggleModal } =
  dataSlice.actions;

export const selectLikes = (state) => state.data.likes;
export const selectProducts = (state) => state.data.products;
export const selectImages = (state) => state.data.images;
export const selectModal = (state) => state.data.modal;

export default dataSlice.reducer;
