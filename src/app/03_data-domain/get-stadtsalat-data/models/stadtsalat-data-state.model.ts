import {
  LOAD_FAILED,
  LOADING,
  NOT_LOADED,
} from "../../utils/loading-status.const";
import { Product } from "./product-model";
import { LoadingStatusEnum } from "../../utils/loading-status.enum";

export const stadtsalatDataSliceName = "stadtsalatData";

export interface StadtsalatState {
  status: LoadingStatusEnum;
  products: Product[];
  likedProducts: string[];
  modalOpen: boolean;
}

export interface StadtsalatDataStateAware {
  [stadtsalatDataSliceName]: StadtsalatState;
}

export type StadtSalatDataStateType =
  | StadtsalatState
  | typeof NOT_LOADED
  | typeof LOADING
  | typeof LOAD_FAILED;
