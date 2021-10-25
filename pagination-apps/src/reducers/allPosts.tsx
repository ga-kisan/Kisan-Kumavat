type Action = {
  type: string;
  payload: [];
};

const initialState: [] = [];

const allPosts = (posts = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_POSTS":
      return [...posts, ...action.payload];
    default:
      return posts;
  }
};

export default allPosts;
