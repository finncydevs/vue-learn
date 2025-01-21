<script setup>
import { ref } from "vue";

import Blog from "./Blog.vue";
import Contact2 from "./Contact2.vue";
import About from "./About.vue";

const currentPages = ref("Blog");

const pages = {
  Blog,
  Contact2,
  About,
};
</script>
<template>
  <div>
    <nav>
      <button @click="currentPages = 'Blog'">Blog</button>
      <button @click="currentPages = 'Contact2'">Contact</button>
      <button @click="currentPages = 'About'">About</button>
    </nav>

    <component :is="pages[currentPages]" />
  </div>
</template>

<style lang="scss" scoped></style>
