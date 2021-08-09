const initialState = {};

const placeDataReducer = (state = initialState, action) => {
  if (action.type === "update-place-data") {
    return action.payload;
  }
  return state;
};

export default placeDataReducer;
