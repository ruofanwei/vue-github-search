<template>
<div>
  <main>
    <ul>
      <li
        v-for="list in lists"
        :key="list.id"
        @click="onActive(list)"
        :class="{ active: activeTab.id === list.id }"
        :id="list.id"
      >
        <div class="menu-item">
          <a>{{ list.value }}</a>
        </div>
      </li>
    </ul>
    <div class="search-results">
      <div v-if="activeTab.id === 1">
        <h1>
          Showing&nbsp;{{ repositories.total_count }}&nbsp;available repository
          results
        </h1>
        <Repository
          v-for="item in repositories.items"
          :key="item.index"
          :updateAt="item.updated_at"
          :repository="item"
        />
      </div>
      <div v-if="activeTab.id === 2">
        <h1>{{ topics.total_count }}&nbsp;topic results</h1>
        <Topic
          v-for="item in topics.items"
          :key="item.index"
          :updateAt="item.updated_at"
          :topic="item"
        />
      </div>
      <div v-if="activeTab.id === 3">
        <h1>{{ users.total_count }}&nbsp;users</h1>
        <User v-for="item in users.items" :key="item.index" :user="item" />
      </div>
    </div>

  </main>
  <!-- Loading -->
    <div class="loadSpace">
      <Loading :class="{ hidden: isLoading === false }"  />
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import User from "./User.vue";
import Repository from "./Repository.vue";
import Topic from "./Topic.vue";
export default {
  name: "Content",
  components: { User, Repository, Topic, Loading },
  props: {
    type: { type: String, default: "" },
    repositories: { type: Object },
    topics: { type: Object },
    users: { type: Object },
    isLoading: {type: Boolean, default: false}
  },
  data() {
    return {
      lists: [
        { id: 1, value: "Repositories" },
        { id: 2, value: "Topics" },
        { id: 3, value: "Users" },
      ],
      activeTab: {
        id: 1,
        value: "Repositories",
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      document.getElementById("1").click();
    });
  },
  methods: {
    onActive: function (list) {
      this.activeTab = list;
      this.$emit("onActiveType", list.value);
    },
  },
};
</script>

<style scoped>
.loadSpace{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hidden{
  visibility: hidden;
}

.active {
  background: var(--navColor);
  border-left: 2px solid var(--active);
}
@media (max-width: 768px) {
  main {
    padding: 10px 10px;
    flex-direction: column;
    align-items: center;
  }
  ul {
    flex-direction: row;
  }
  .active {
    border-bottom: 2px solid var(--active);
    border-left: none;
  }
}
.menu-item {
  padding: 10px;
}

.search-results {
  position: relative;
  display: flex;
  flex-direction: column;
  word-break: break-word;
  min-width: 70%;
}
</style>
