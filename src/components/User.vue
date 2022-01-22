<template>
  <div>
    <div class="card">
        <div class="wrapper">
        <img class="avatar" alt="star" :src="user.avatar_url" width="30px" />
      <a class="title" :href="`https://github.com/${user.login}`">{{ user.login }}</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    user: { type: Object },
  },
};
</script>

<style>
img {
  border-radius: 50%;
}
</style>