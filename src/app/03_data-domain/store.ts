import { configureStore } from "@reduxjs/toolkit";
import stadtsalatDataReducer from "./get-stadtsalat-data/reducers/get-stadtsalat-data.slice";
import { stadtsalatDataSliceName } from "./get-stadtsalat-data/models/stadtsalat-data-state.model";

export const store = configureStore({
  reducer: {
    [stadtsalatDataSliceName]: stadtsalatDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
