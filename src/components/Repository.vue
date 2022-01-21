<template>
  <div>
    <h1>Showing&nbsp;{{ total }}&nbsp;available repository results</h1>
    <div class="card" v-for="repository in repositories" :key="repository.id">
      <a class="title" :href="repository.html_url">{{
        repository.full_name
      }}</a>
      <p>{{ repository.description }}</p>
      <p>{{ repository.stargazers_count }}</p>
      <p>{{ repository.updated_at }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Repository",
  props: {
    repositories: { type: Array },
    total: { type: Number },
  },
  setup(props) {
    console.log("props", props);
  },
};
</script>

<style>
h1 {
  margin: 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--navColor);
}
.card {
  padding-bottom: 1rem;
  padding-top: 1rem;
}
.title {
  text-decoration: none;
  color: var(--primary);
  font-size: var(--h1);
  font-weight: var(--normal);
}

.title:hover {
  text-decoration: underline;
}
.title:active {
  text-decoration: underline;
}
</style>