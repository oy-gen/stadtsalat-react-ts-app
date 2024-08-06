import {
  StadtsalatDataStateAware,
  StadtsalatState,
} from "../models/stadtsalat-data-state.model";
import { isLoaded } from "../../utils/is-loaded.function";

export const selectStadtsalatData = (
  state: StadtsalatDataStateAware,
): StadtsalatState | null =>
  isLoaded(state.stadtsalatData) ? state.stadtsalatData : null;
