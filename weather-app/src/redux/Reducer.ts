const initialState: any = [];

export default (state: any = initialState, action: any) => {
  if (action.type === "STORE_DATA") {
    return action.payload;
  } else {
    return state;
  }
};
