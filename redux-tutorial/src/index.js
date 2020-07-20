import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore } from "redux";

function productsreducer(state = [], action) {
  return "State";
}

function userReducer(state = "", action) {
  switch (action.type) {
    case "updateUser":
      return action.payload;
    default:
  }

  return state;
}

const allReducers = combineReducers({
  products: productsreducer,
  user: userReducer,
});

const store = createStore(
  allReducers,
  {
    products: [{ name: "iPhone" }],
    user: "Michael",
  },
  window.devToolsExtension && window.devToolsExtension()
);

console.log(store.getState());

const updateUserAction = {
  type: "updateUser",
  payload: {
    user: "John",
  },
};

store.dispatch(updateUserAction);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
