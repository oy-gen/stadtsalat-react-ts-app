export default function toggleLikesReducer(state, action) {
  if (state.likes.includes(action.payload)) {
    state.likes = state.likes.filter((id) => action.payload !== id);
  } else {
    state.likes = [...state.likes, action.payload];
  }
}
