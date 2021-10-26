import { combineReducers } from "redux";

import allPosts from "./allPosts";
import pageValues from "./pageValues";

const reducers = combineReducers({
  allPosts,
  pageValues,
});

export default reducers;
