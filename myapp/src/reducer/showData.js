// const initialState = {
//   username: "",
//   password: "",
// };

// const initialState = {};

// const initialState = null;

const initialState = {
  username: null,
  password: null,
};

const showData = (state = initialState, action) => {
  if (action.type === "change-data") {
    return { ...state, username: action.payload };
  } else if (action.type === "change-email") {
    return { ...state, email: action.payload };
  } else {
    return state;
  }
};

export default showData;
