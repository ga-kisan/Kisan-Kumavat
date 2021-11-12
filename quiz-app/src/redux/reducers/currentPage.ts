import { CurrentPage } from "../../types";

const initialState = 1;

type Action = {
  type: string;
  payload: CurrentPage;
};

const currentPage = (state: CurrentPage = initialState, action: Action) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return action.payload;
    default:
      return state;
  }
};

export default currentPage;
