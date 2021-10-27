import { createStore } from "redux";
import dataReducer from "./DataReducer";

const store = createStore(dataReducer);

export default store;
