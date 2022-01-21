<template>
  <div>
    <Header @onSearch="getSearchQuery" :type="type" />
    <Content @onActiveType="getActiveType" :repositories="repositories" :topics="topics" :users="users"/>
  </div>
</template>

<script>
import { getRepositories, getTopics, getUsers } from "./api/github.api";
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";

export default {
  name: "App",
  components: {
    Header,
    Content,
  },
  data() {
    return {
      type: "repositories",
      searchQuery: "github",
      repositories: {},
      topics: {},
      users: {},
    };
  },
  created: async function () {
    const result = await getRepositories(this.searchQuery);
    this.repositories = result;
  },
  watch: {
    type: async function (type) {
      if (this.searchQuery.length >= 3) {
        this.getSearchResult(this.searchQuery, type);
      }
    },
    searchQuery: async function (searchQuery) {
      if (searchQuery.length >= 3) {
        this.getSearchResult(searchQuery, this.type);
      }
    },
  },
  methods: {
    async getSearchQuery(value) {
      this.searchQuery = value;
    },
    async getActiveType(value) {
      this.type = value;
    },
    /**
     * fetch github api according to search type
     * @param string searchText - length of searchText must greater or equal to three words
     * @param string type - Repositories | Topics | Users
     * @return object
     */
    getSearchResult: async function (searchText, type) {
      switch (type) {
        case "Repositories":
          this.repositories = await getRepositories(searchText);
          break;
        case "Topics":
          this.topics = await getTopics(searchText);
          break;
        case "Users":
          this.users = await getUsers(searchText);
          break;
      }
    },
  },
};
</script>

<style>
</style>