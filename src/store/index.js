import Vue from "vue";
import Vuex from "vuex";
import { getRepositories, getTopics, getUsers } from "../api/github.api";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    repositories: {
      items: [],
      total_count: 0,
    },
    topics: {
      items: [],
      total_count: 0,
    },
    users: {
      items: [],
      total_count: 0,
    },
    isLoadMore: false,
    page: 1,
  },
  actions: {
    /**
     * fetch github api according to search type
     * @param string searchText - length of searchText must greater or equal to three words
     * @param string type - Repositories | Topics | Users
     * @return
     */
    async GET_SEARCH_RESULT(context, payload) {
      const { searchQuery, type, page } = payload;
      let result;
      switch (type) {
        case "Repositories":
          context.commit("loaded", true);
          result = await getRepositories(searchQuery, page);
          context.commit("setRepositories", result);
          context.commit("loaded", false);
          break;
        case "Topics":
          context.commit("loaded", true);
          result = await getTopics(searchQuery, page);
          context.commit("setTopics", result);
          context.commit("loaded", false);
          break;
        case "Users":
          context.commit("loaded", true);
          result = await getUsers(searchQuery, page);
          context.commit("setUsers", result);
          context.commit("loaded", false);
          break;
      }
    },
    /**
     * fetch next page according to search type
     * To prevent unnecessary load, used the throttling
     * throttling will execute the function only one time in 1000 milliseconds
     * @param string searchText - length of searchText must greater or equal to three words
     * @param string type - Repositories | Topics | Users
     * @return
     */
    async LOAD_MORE_RESULT(context, payload) {
      const { searchQuery, type, page } = payload;
      let result;
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            switch (type) {
              case "Repositories":
                // check total available data
                if (
                  context.state.repositories.total_count <=
                  context.state.repositories.items.length
                )
                  return context.commit("loaded", false);
                // start load more data
                context.commit("loaded", true);
                result = await getRepositories(searchQuery, page);
                resolve(result);
                context.commit("addRepositories", result.items);
                context.commit("loaded", false);
                break;
              case "Topics":
                // check total available data
                if (
                  context.state.topics.total_count <=
                  context.state.topics.items.length
                )
                  return context.commit("loaded", false);
                // start load more data
                context.commit("loaded", true);
                result = await getTopics(searchQuery, page);
                resolve(result);
                context.commit("addTopics", result.items);
                context.commit("loaded", false);
                break;
              case "Users":
                // check total available data
                if (
                  context.state.users.total_count <=
                  context.state.users.items.length
                )
                  return context.commit("loaded", false);
                // start load more data
                context.commit("loaded", true);
                result = await getUsers(searchQuery, page);
                resolve(result);
                context.commit("addUsers", result.items);
                context.commit("loaded", false);
                break;
            }
          } catch (error) {
            reject(error);
          }
        }, 1000);
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
    isLoadMore(state) {
      return state.isLoadMore;
    },
    page(state) {
      return state.page;
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
    loaded(state, loadingStatus) {
      state.isLoadMore = loadingStatus;
    },
    resetPage(state) {
      state.page = 1;
    },
    addPage(state) {
      state.isLoadMore = true;
      state.page += 1;
    },
  },
});
