import { combineReducers } from "redux";
import showData from "./showData";
import todoReducer from "./todoReducer";
import placeDataReducer from "./placeDataReducer";
import placeReducer from "./placeReducer";

const rootReducer = combineReducers({
  showData: showData,
  todos: todoReducer,
  place: placeReducer,
  placeData: placeDataReducer,
});

export default rootReducer;
