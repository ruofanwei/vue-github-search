<template>
  <nav id="nav">
    <div class="searchBar">
      <img alt="github" src="../assets/github.svg" width="32px" />
      <!-- onKeyUp event is triggered when the user releases keys  -->
      <input
        v-model.trim="searchText"
        ref="searchText"
        type="text"
        placeholder="Search or jump to..."
        @keyup="DebounceFn"
      />
    </div>
    <img alt="github" src="../assets/avatar.svg" width="32px" />
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "github",
    };
  },
  methods: {
    // If the user types very fast, will allow the execution of func only when the user has stopped typing in the search bar
    DebounceFn: function () {
      if (this.searchText.length >= 3) {
        // schedule the execution after user stopped typing in the search bar
        setTimeout(() => {
          this.$emit("onSearch", this.searchText);
        }, 1000);
      }
    },
  },
};
</script>

<style scoped>
#nav {
  color: white;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 16px 32px;
  font-size: var(--p);
  font-family: var(--font-family);
  color: var(--fg);
  background: var(--navColor);
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.searchBar {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
}
</style>
