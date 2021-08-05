import "../Day 27/style.css";
const initialState = [];

const todoReducer = (state = initialState, action) => {
  if (action.type === "add-todo") {
    return [...state, action.payload];
  } else if (action.type === "delete-todo") {
    return state.filter((item, i) => i !== action.payload);
  } else if (action.type === "toggle-todo") {
    return state.filter((item, i) => i === action.payload);
  } else {
    return state;
  }
};

export default todoReducer;
