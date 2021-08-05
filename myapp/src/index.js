import REACT from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main_index from "./Main_index";
import store from "./store";
import { Provider } from "react-redux";

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <Main_index />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
