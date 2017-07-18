export const isUser = state => state.currentUser && state.profile.username === state.currentUser.username;

export const pageCount = state => {
  return Math.ceil(state.articlesCount / 10);
};
