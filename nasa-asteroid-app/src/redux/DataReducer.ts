const initialState = {
  name: "",
  nasa_jpl_url: "",
  is_potentially_hazardous_asteroid: false,
};

type State = {
  name: string;
  nasa_jpl_url: string;
  is_potentially_hazardous_asteroid: boolean;
};

type Action = {
  type: string;
  payload: State;
};

const dataReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default dataReducer;
