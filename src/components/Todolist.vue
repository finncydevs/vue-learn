<script setup>
const items = [
  {
    id: 1,
    path: "learning javascript",
    name: "finn"
  },
  {
    id: 2,
    path: "learning vuejs",
    name: "finn"
  },
  {
    id: 3,
    path: "learning vuex",
    path: "learning vuex",
    name: "finn"
  },
];
</script>
<template>
  <div>
    <h1>Path learning</h1>
    <ul v-for="item in items">
      <li v-for="(key, value) in item"> {{ key }} : {{ value }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
