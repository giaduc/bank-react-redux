import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Authentication from "./Authentication";
import registerServiceWorker from "./registerServiceWorker";
import bankStore from "./store/bankStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={bankStore}>
    <Authentication />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
