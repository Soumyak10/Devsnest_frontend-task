const initialState = "";

const placeReducer = (state = initialState, action) => {
  if (action.type === "update-place") {
    return action.payload;
  }
  return state;
};

export default placeReducer;
