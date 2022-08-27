export default function setProductsReducer(state, action) {
  state.products = action.payload;
}
