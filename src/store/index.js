import Vue from "vue";
import Vuex from "vuex";
import { getRepositories, getTopics, getUsers } from "../api/github.api";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    repositories: {
      items: [],
      total: 0,
    },
    topics: {
      items: [],
      total: 0,
    },
    users: {
      items: [],
      total: 0,
    },
  },
  actions: {
    /**
     * fetch github api according to search type
     * @param string searchText - length of searchText must greater or equal to three words
     * @param string type - Repositories | Topics | Users
     * @return
     */
    async getSearchResult(context, payload) {
      const { searchQuery, type, page } = payload;
      let result;
      switch (type) {
        case "Repositories":
          result = await getRepositories(searchQuery, page);
          context.commit("setRepositories", result);
          break;
        case "Topics":
          result = await getTopics(searchQuery, page);
          context.commit("setTopics", result);
          break;
        case "Users":
          result = await getUsers(searchQuery, page);
          context.commit("setUsers", result);
          break;
      }
      return result;
    },
    /**
     * fetch next page according to search type
     * throttled and wait is the time interval in milliseconds
     * @param string searchText - length of searchText must greater or equal to three words
     * @param string type - Repositories | Topics | Users
     * @return
     */
    async getMorResult(context, payload) {
      const { searchQuery, type, page } = payload;
      let result;
      return new Promise((resolve) => {
        setTimeout(async () => {
          switch (type) {
            case "Repositories":
              result = await getRepositories(searchQuery, page);
              context.commit("addRepositories", result.items);
              resolve();
              break;
            case "Topics":
              result = await getTopics(searchQuery, page);
              context.commit("addTopics", result.items);
              resolve();
              break;
            case "Users":
              result = await getUsers(searchQuery, page);
              context.commit("addUsers", result.items);
              resolve();
              break;
          }
        }, 1000)
      });
    },
  },
  getters: {
    repositories(state) {
      return state.repositories;
    },
    topics(state) {
      return state.topics;
    },
    users(state) {
      return state.users;
    },
  },
  mutations: {
    setTopics(state, topics) {
      state.topics = topics;
    },
    setRepositories(state, repositories) {
      state.repositories = repositories;
    },
    setUsers(state, users) {
      state.users = users;
    },
    addTopics(state, topics) {
      state.topics.items = state.topics.items.concat(topics);
    },
    addRepositories(state, repositories) {
      state.repositories.items = state.repositories.items.concat(repositories);
    },
    addUsers(state, users) {
      state.users.items = state.users.items.concat(users);
    },
  },
});
