import showData from "./showData";
import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  showData: showData,
  todos: todoReducer,
});

export default rootReducer;
