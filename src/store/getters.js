export const isUser = state => state.currentUser && state.profile.username === state.currentUser.username;

export const pageRange = state => {
  let page = [];
  for(let i = 0; i < Math.ceil(state.articlesCount / 10); i++) {
    page.push(i);
  }
  return page;
};
