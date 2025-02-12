import React from "react";
import ReactDOM from "react-dom/client"; // Import from "react-dom/client"
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/redusers";
import App from "./App";

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root")); // Create root

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
