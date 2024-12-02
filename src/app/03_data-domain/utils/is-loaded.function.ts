import { LOAD_FAILED, LOADING, NOT_LOADED } from "./loading-status.const";

export const isLoaded = <T>(
  state: T | typeof NOT_LOADED | typeof LOADING | typeof LOAD_FAILED,
): state is T => {
  return state !== NOT_LOADED && state !== LOADING && state !== LOAD_FAILED;
};
