export type Posts = [];

export const addPosts = (posts: Posts) => ({
  type: "ADD_POSTS",
  payload: posts,
});
