<template>
  <div>
    <div class="card">
        <div class="wrapper">
        <div class="deco">#</div>
        <a class="title" :href="`https://github.com/topics/${topic.name}`">{{ topic.name }}</a>
        </div>
        <p>{{ topic.short_description }}</p>
      <p class="memo">{{ formatDate }}</p>
    </div>
  </div>
</template>

<script>
import { format } from "../utils/timeFn";
export default {
name: "Topic",
props: {
    topic: { type: Object },
    updateAt: { type: String },
},
computed: {
    formatDate: function () {
      return format(this.updateAt);
    },
  },
}
</script>

<style>

.wrapper{
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}
.deco{
    background: var(--darkBlue);
    width: 25px;
    height: 25px;
    border-radius: 35%;
    text-align: center;
    font-size: var(--h2);
    font-weight: var(--bold);
    vertical-align: bottom;
    color: var(--gray);
}

</style>