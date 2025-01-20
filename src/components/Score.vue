<script setup>
import { ref } from 'vue';

const score = ref(100)
</script>

<template>
  <h1>Score</h1>
  <div v-if="score > 90">
    
  </div>
</template>

<style scoped>
.hello {
  color: green;
}
</style>
