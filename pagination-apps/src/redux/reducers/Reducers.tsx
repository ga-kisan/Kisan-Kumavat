import { combineReducers } from "redux";
import AllPosts from "./AllPosts";
import PageValues from "./PageValues";

const Reducers = combineReducers({
  allPosts: AllPosts,
  pageValues: PageValues,
});

export default Reducers;
