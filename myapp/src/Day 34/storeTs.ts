import rootReducer from "./reducers/indexTs";
import { createStore } from "redux";

const storeTs = createStore(rootReducer);
export default storeTs;
