export default {
  state: {
    searchResult: {
      repositories: {},
      users: {},
      topics: {},
    },
    isLoading: false,
  },
  getters: {
    repositories(state) {
      return state.searchResult.repositories;
    },
    users(state) {
      return state.searchResult.users;
    },
    topics(state) {
      return state.searchResult.topics;
    },
  },
  actions: {},
  mutations: {
    Loaded(state) {
      state.isLoading = !state.isLoading;
    },
    setRepository(state, items) {
      state.searchResult.repositories = items;
    },
    setUser(state, items) {
      state.searchResult.users = items;
    },
    setTopic(state, items) {
      state.searchResult.topics = items;
    },
  },
};