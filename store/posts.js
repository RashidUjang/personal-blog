export const state = () => ({
  posts: [],
  projects: []
});

export const getters = {
  getPosts(state) {
    return state.posts;
  }
};

export const mutations = {
  assignPosts(state, payload) {
    state.posts = payload;
  }
};
