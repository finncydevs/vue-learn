<script setup>
import { ref } from "vue";

const red = ref(false);
const bold = ref(false);

function toggleRed() {
  red.value = !red.value;
}
function toggleBold() {
  bold.value = !bold.value;
}
</script>
<template>
  <div>
    <h1 :class="{ red: red, bold: bold }">Red</h1>
    <h1 :class="['red', 'bold']">React</h1>
    <button @click="toggleRed">Red</button>
    <button @click="toggleBold">Bold</button>
  </div>
</template>

<style scoped>
.red {
  color: red;
}
.bold {
  font-weight: 800p;
  text-transform: uppercase;
}
</style>
