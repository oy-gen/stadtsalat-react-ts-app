import { createSelector } from "@reduxjs/toolkit";
import {
  Image,
  Product,
} from "../03_data-domain/get-stadtsalat-data/models/product-model";
import { selectStadtsalatData } from "../03_data-domain/get-stadtsalat-data/selectors/feature.selector";
import { StadtsalatState } from "../03_data-domain/get-stadtsalat-data/models/stadtsalat-data-state.model";

export const selectProducts = createSelector(
  [selectStadtsalatData],
  (stadtsalatData: StadtsalatState | null): Product[] => {
    return stadtsalatData ? stadtsalatData.products : [];
  },
);

export const selectImages = createSelector(
  [selectProducts],
  (products: Product[]): Image[] => {
    return products.map((product: Product) => product.image);
  },
);

export const selectIsProductLiked = (id: string) =>
  createSelector([selectStadtsalatData], (stadtsalatData) => {
    return stadtsalatData && stadtsalatData.likedProducts.includes(id);
  });

export const selectIsModalOpen = (id: string) =>
  createSelector([selectStadtsalatData], (stadtsalatData) => {
    return stadtsalatData && stadtsalatData.modalsOpen.includes(id);
  });
