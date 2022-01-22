<template>
  <div class="card">
    <a class="title" :href="repository.html_url">{{ repository.full_name }}</a>
    <p>{{ repository.description }}</p>
    <div class="memo">
      <div class="stargazer">
        <img alt="star" src="../assets/star.svg" width="18px" />
        <p>{{ repository.stargazers_count }}</p>
      </div>
      <div class="stargazer">
        <div
          v-if="repository.language"
          :style="{ backgroundColor: randomColor(repository.language) }"
          class="repo-language"
        ></div>
        <p>{{ repository.language }}</p>
      </div>
      <p>{{ formatDate }}</p>
    </div>
  </div>
</template>

<script>
import { format } from "../utils/timeFn";
export default {
  name: "Repository",
  props: {
    repository: { type: Object },
    updateAt: { type: String },
  },
  data() {
    return {
      languageColor: {},
    };
  },
  computed: {
    formatDate: function () {
      return format(this.updateAt);
    },
  },
  methods: {
    randomColor(language) {
      const r = () => Math.floor(256 * Math.random());
      return this.languageColor[language] = `rgb(${r()}, ${r()}, ${r()})`
    },
  },
};
</script>

<style>

.stargazer {
  display: flex;
  gap: 5px;
  align-items: center;
}
.repo-language {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--repo);
}
.memo {
  display: flex;
  gap: 20px;
  color: var(--gray);
}
</style>