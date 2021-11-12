import { combineReducers } from "redux";

import userData from "./userData";
import questions from "./questions";
import currentPage from "./currentPage";

const rootReducer = combineReducers({
  userData,
  questions,
  currentPage,
});

export default rootReducer;
