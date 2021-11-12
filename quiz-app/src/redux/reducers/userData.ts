import { UserData } from "../../types";

const initialState: UserData = {
  name: "",
  gender: "",
  language: "",
  isTestFinished: false,
};

// type Action = {
//   type: string;
//   payload: UserData;
// };

const userData = (state: UserData = initialState, action: any) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        name: action.payload.name,
        gender: action.payload.gender,
        language: action.payload.language,
      };
    case "SET_TEST_FINISHED":
      return {
        ...state,
        isTestFinished: action.payload,
      };
    default:
      return state;
  }
};

export default userData;
