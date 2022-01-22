<template>
  <div id="app">
    <Header @onSearch="getSearchQuery" :type="type" />
    <Content
      @onActiveType="getActiveType"
      :repositories="repositories"
      :topics="topics"
      :users="users"
    />
  </div>
</template>

<script>
import { mapGetters} from "vuex";
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import { getRepositories } from "./api/github.api";

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
      page: 1,
      isLoadMore: false,
    };
  },
  async created() {
    this.resetPage();
    const result = await getRepositories(this.searchQuery, this.page);
    this.$store.commit("setRepositories", result)
  },
  mounted() {
    this.loadMore();
  },
  updated() {
    this.loadMore();
  },
  watch: {
    type: async function (type) {
      this.resetPage();
      if (this.searchQuery.length >= 3) {
        this.$store.dispatch("getSearchResult", {
          searchQuery: this.searchQuery,
          type: type,
          page: this.page,
        });
      }
    },
    searchQuery: async function (searchQuery) {
      this.resetPage();
      if (searchQuery.length >= 3) {
          this.$store.dispatch("getSearchResult", {
            searchQuery: searchQuery,
            type: this.type,
            page: this.page,
          })
      }
    },
    page: async function (nextPage, oldPage) {
      if (nextPage > oldPage) {
        this.$store.dispatch("getMorResult", {
          searchQuery: this.searchQuery,
          type: this.type,
          page: this.page,
        });
      }
    },
  },
  computed: {

    ...mapGetters(["repositories", "topics", "users"]),
  },
  methods: {

    async getSearchQuery(value) {
      this.searchQuery = value;
    },
    async getActiveType(value) {
      this.type = value;
    },
    // detecting when the user has reached the bottom of the window
    loadMore: async function () {
      window.onscroll = async () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.isLoadMore = true;
          this.page += 1;
        }
      };
    },
    resetPage: function () {
      this.page = 1;
      this.isLoadMore = false;
    },
  },
};
</script>

<style>
</style>