<template>
  <div id="app">
    <Header @onSearch="getSearchQuery" :type="type" />
    <Content
      @onActiveType="getActiveType"
      :repositories="repositories"
      :topics="topics"
      :users="users"
      :isLoading="isLoadMore"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
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
    };
  },
  async created() {
    this.$store.dispatch("GET_SEARCH_RESULT", {
      searchQuery: this.searchQuery,
      type: this.type,
      page: this.page,
    });
  },
  mounted() {
    this.scroll();
  },
  watch: {
    type: async function (type) {
      this.$store.commit("resetPage");
      if (this.searchQuery.length >= 3) {
        this.$store.dispatch("GET_SEARCH_RESULT", {
          searchQuery: this.searchQuery,
          type: type,
          page: this.page,
        });
      }
    },
    searchQuery: async function (searchQuery) {
      this.$store.commit("resetPage");
      if (searchQuery.length >= 3) {
        this.$store.dispatch("GET_SEARCH_RESULT", {
          searchQuery: searchQuery,
          type: this.type,
          page: this.page,
        });
      }
    },
  },
  computed: {
    ...mapState(["isLoadMore", "page"]),
    ...mapGetters(["repositories", "topics", "users", "isLoadMore", "page"]),
  },
  methods: {
    ...mapActions(["GET_SEARCH_RESULT", "LOAD_MORE_RESULT"]),
    async getSearchQuery(value) {
      this.searchQuery = value;
    },
    async getActiveType(value) {
      this.type = value;
    },
    // detecting when the user has reached the bottom of the window
    scroll: function () {
      window.onscroll = () => {
        // added an event listener on the scroll event
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.$store.commit("addPage");
          this.$store.dispatch("LOAD_MORE_RESULT", {
            searchQuery: this.searchQuery,
            type: this.type,
            page: this.page,
          });
        }
      };
    },
  },
};
</script>

<style>
</style>