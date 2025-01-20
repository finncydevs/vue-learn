<script setup>
console.info("Helloo Vue ");
const hello = "Hallo vuee";

const data = {
  class: "hello",
  id: "hello",
};
</script>

<template>
  <h1 v-bind="data">{{ hello }}</h1>
  <div :class="data.class"></div>
</template>

<style scoped>
.hello {
  color: green;
}
</style>
