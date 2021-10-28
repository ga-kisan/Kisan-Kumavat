type Action = {
  type: string;
  payload?: [];
};

const initialState: [] = [];

const currentPosts = (posts = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_CURRENT_POSTS":
      return action.payload;
    default:
      return posts;
  }
};

export default currentPosts;
