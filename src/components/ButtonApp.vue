<script setup>
import Container from "./Container.vue";
import MyButton from "./MyButton.vue";
Container;

function clickHandra() {
  alert("you click me");
}
</script>
<template>
  <Container title="contoh button ">
    <MyButton class="button" @click="clickHandra" />
  </Container>
</template>
