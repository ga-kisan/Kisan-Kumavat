export type CurrentPosts = [];

export const setCurrentPosts = (posts: CurrentPosts) => ({
  type: "ADD_CURRENT_POSTS",
  payload: posts,
});
