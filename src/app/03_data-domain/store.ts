import { configureStore } from "@reduxjs/toolkit";
import stadtsalatDataReducer from "./get-stadtsalat-data/reducers/get-stadtsalat-data.slice";

export const store = configureStore({
  reducer: {
    stadtsalatData: stadtsalatDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
