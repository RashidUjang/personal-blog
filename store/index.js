export const state = () => ({
  about: {},
  projects: {}
});

export const getters = {
  getAbout(state) {
    return state.about;
  },
  getProjects(state) {
    return state.projects;
  }
};

export const mutations = {
  assignAbout(state, payload) {
    state.about = payload;
  },
  assignProjects(state, payload) {
    state.projects = payload;
  }
};

export const actions = {
  // Runs right after the server is created. NuxtServerInit must be defined in index.js
  async nuxtServerInit({ commit }) {
    const fetchedPosts = await this.$content("posts")
      .sortBy("createdAt", "desc")
      .fetch();
    const fetchedAbout = await this.$content("about").fetch();
    const fetchedProjects = await this.$content("projects").fetch();

    commit("posts/assignPosts", fetchedPosts);
    commit("assignAbout", fetchedAbout);
    commit("assignProjects", fetchedProjects);
  }
};
