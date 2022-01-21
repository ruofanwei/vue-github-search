<template>
  <nav id="nav">
    <div class="searchBar">
      <img alt="github" src="../assets/github.svg" width="32px" />
      <input type="text" placeholder="Search or jump to..." />
    </div>
    <img alt="github" src="../assets/avatar.svg" width="32px" />
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
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
}
.searchBar {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
}

</style>
