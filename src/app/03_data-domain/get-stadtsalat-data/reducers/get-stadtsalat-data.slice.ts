import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StadtsalatState } from "../models/stadtsalat-data-state.model";
import { Product } from "../models/product-model";
import { LoadingStatusEnum } from "../../utils/loading-status.enum";

const initialState: StadtsalatState = {
  status: LoadingStatusEnum.NOT_LOADED,
  products: [],
  likedProducts: [],
  modalsOpen: [],
};

export interface SetProductsPayload {
  products: Product[];
}

export const getStadtsalatDataSlice = createSlice({
  name: "stadtsalatData",
  initialState,
  reducers: {
    loadRequested: (state: StadtsalatState) =>
      (state = { ...state, status: LoadingStatusEnum.LOADING }),
    loadSuccessful: (
      state: StadtsalatState,
      action: PayloadAction<SetProductsPayload>,
    ) => {
      const products = action.payload.products
        .filter(
          (product: Product) =>
            product.productTags.includes("product.salad") ||
            product.productTags.includes("product.bowl"),
        )
        .map((product) => ({
          ...product,
          image: {
            url: `https://static.stadtsalat.de/shop/image/${product.image}`,
            name: product.name,
          },
          rating: Math.ceil(Math.random() * 5),
        }));
      return {
        ...state,
        products: products,
        status: LoadingStatusEnum.LOADED,
      };
    },

    loadFailed: (state: StadtsalatState) => ({
      ...state,
      status: LoadingStatusEnum.LOAD_FAILED,
    }),
    toggleLike: (state: StadtsalatState, action: PayloadAction<string>) => {
      const likedProducts = state.likedProducts;
      if (likedProducts.includes(action.payload)) {
        likedProducts.filter((productId) => productId !== action.payload);
      } else {
        likedProducts.push(action.payload);
      }
      state.likedProducts = likedProducts;
    },
    toggleModal: (state, action: PayloadAction<string>) => {
      const modalOpen: string[] = state.modalsOpen;
      if (modalOpen.includes(action.payload)) {
        modalOpen.filter((productId) => productId !== action.payload);
      } else {
        modalOpen.push(action.payload);
      }
      state.likedProducts = modalOpen;
    },
  },
});

export const {
  loadRequested,
  loadSuccessful,
  loadFailed,
  toggleLike,
  toggleModal,
} = getStadtsalatDataSlice.actions;

export default getStadtsalatDataSlice.reducer;
