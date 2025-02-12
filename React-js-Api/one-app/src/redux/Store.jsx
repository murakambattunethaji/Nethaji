import { createStore } from "redux";
import rootReducer from "./Redusers";

const store = createStore(rootReducer);

export default store;
