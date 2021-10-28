type Action = {
  type: string;
  payload: [];
};

const initialState: [] = [];

const AllPosts = (posts = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_POSTS":
      return [...posts, ...action.payload];
    default:
      return posts;
  }
};

export default AllPosts;
