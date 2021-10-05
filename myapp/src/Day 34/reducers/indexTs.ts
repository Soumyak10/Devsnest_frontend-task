import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import noteReducer from "./noteReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  notes: noteReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
