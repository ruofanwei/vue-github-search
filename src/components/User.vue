<template>
  <div>
    <h1>Showing&nbsp;{{ total }}&nbsp;available user results</h1>
    <div class="card" v-for="user in users" :key="user.id">

      <p>{{ user.updated_at }}</p>
    </div>
  </div>
</template>

<script>
export default {
name: "User",
props: {
    users: { type: Array },
    total: { type: Number },
},
}
</script>

<style>

</style>