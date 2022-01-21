<template>
  <main>
    <ul>
      <li
        v-for="list in lists"
        :key="list.id"
        @click="onActive(list)"
        :class="{ active: activeTab.id === list.id }"
      >
        <div class="menu-item">
          <a>{{ list.value }}</a>
        </div>
      </li>
    </ul>
    <div class="search-results">
      <div v-if="activeTab.id === 1">
        <Repository
          :repositories="repositories.items"
          :total="repositories.total_count"
        />
      </div>
      <div v-if="activeTab.id === 2">
        <Topic
          :topics="topics.items"
          :total="topics.total_count"
        />
      </div>
      <div v-if="activeTab.id === 3">
        <User
          :users="users.items"
          :total="users.total_count"
        />
      </div>
    </div>
  </main>
</template>

<script>
import User from "./User.vue";
import Repository from "./Repository.vue";
import Topic from "./Topic.vue";
export default {
  name: "Content",
  components: { User, Repository, Topic },
  props: {
    type: { type: String, default: "" },
    repositories: { type: Object },
    topics: { type: Object },
    users: { type: Object },
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

  methods: {
    onActive: function (list) {
      this.activeTab = list;
      this.$emit("onActiveType", list.value);
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  padding: 1rem 10rem;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
}
ul {
  display: flex;
  list-style: none;
  flex-direction: column;
  cursor: pointer;
  border: 1px solid var(--navColor);
  margin: 0;
  padding: 0;
  border-radius: 6px;
  font-size: 14px;
}
li {
  padding: 0;
  display: block;
  border-bottom: 1px solid var(--navColor);
}
li:nth-child(3) {
  border-bottom: none;
}
.active {
  background: var(--navColor);
  border-left: 2px solid var(--active);
}
.menu-item {
  padding: 10px;
}

.search-results {
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
