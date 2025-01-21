<script setup>
import { reactive, toRefs, ref, nextTick } from "vue";
let counter = ref({
  count: 0,
  name: "Jindan",
});

async function increment() {
  console.info(`Increment counter : ${counter.value.count}`);
  counter.value = {
    ...counter.value,
    name: counter.value.name,
    count: counter.value.count + 1,
  };
}



await nextTick()

console.log("Increment next tick")
</script>
<template>
  <div>
    <h1 id="count">Counter {{ counter.name }} : {{ counter.count }}</h1>
    <button v-on:click="increment">Increment</button>
  </div>
</template>

<style lang="scss" scoped></style>
