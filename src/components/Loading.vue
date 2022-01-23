<template>
  <div class="load">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style>
.load {
  display: inline-block;
  position: relative;

  width: 64px;
  height: 64px;
}
.load div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 32px;
  height: 32px;
  margin: 8px;
  border: 4px solid var(--gray);
  border-radius: 50%;
  animation: load 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--gray) transparent transparent transparent;
}
.load div:nth-child(1) {
  animation-delay: -0.45s;
}
.load div:nth-child(2) {
  animation-delay: -0.3s;
}
.load div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>