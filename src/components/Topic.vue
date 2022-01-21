<template>
  <div>
    <h1>Showing&nbsp;{{ total }}&nbsp;available topic results</h1>
    <div class="card" v-for="topic in topics" :key="topic.id">

      <p>{{ topic.short_description }}</p>
      <p>{{ topic.updated_at }}</p>
    </div>
  </div>
</template>

<script>
export default {
name: "Topic",
props: {
    topics: { type: Array },
    total: { type: Number },
},
}
</script>

<style>

</style>