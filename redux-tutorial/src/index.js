import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore } from "redux";
//use Provider to give access to the store
import { Provider } from "react-redux";
import productsReducer from "./reducers/products-reducer";
import userReducer from "./reducers/user-reducer";

const allReducers = combineReducers({
  products: productsReducer,
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

// console.log(store.getState());

// const updateUserAction = {
//   type: "updateUser",
//   payload: {
//     user: "John",
//   },
// };

// store.dispatch(updateUserAction);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App aRandomProps ="whatever"/>
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
