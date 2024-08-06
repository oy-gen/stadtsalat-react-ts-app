import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  loadFailed,
  loadRequested,
  loadSuccessful,
} from "../reducers/get-stadtsalat-data.slice";
import { StadtsalatDataStateAware } from "../models/stadtsalat-data-state.model";
import { LoadingStatusEnum } from "../../utils/loading-status.enum";

export const fetchData = createAsyncThunk(
  "stadtsalat/fetchData",
  async (_, { dispatch, getState }) => {
    const state = getState() as StadtsalatDataStateAware;

    if (state.stadtsalatData.status === LoadingStatusEnum.NOT_LOADED) {
      dispatch(loadRequested());

      try {
        const response = await axios.get(
          "https://api.stadtsalat.de/shop/grosse-theaterstrasse-store/",
        );
        dispatch(loadSuccessful({ products: response.data.products }));
      } catch (error) {
        dispatch(loadFailed());
      }
    }
  },
);
