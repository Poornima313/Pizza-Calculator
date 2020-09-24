import React from "react";
import { render } from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import Application from "./components/Application";
import getInitialState from "./initial-state";
import reducer from "./reducer";

import "./style.css";

const store = createStore(reducer, getInitialState());

// const middleware = [];

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("root")
);
