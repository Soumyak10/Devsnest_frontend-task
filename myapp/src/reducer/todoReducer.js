const initialState = [];

const todoReducer = (state = initialState, action) => {
  if (action.type === "add-todo") {
    return [...state, action.payload];
  } else if (action.type === "delete-todo") {
    return state.filter((item, i) => i !== action.payload);
  } else if (action.type === "toggle-todo") {
    const newState = [...state];
    newState[action.payload].done = !state[action.payload].done;
    return newState;
  } else {
    return state;
  }
};

export default todoReducer;
