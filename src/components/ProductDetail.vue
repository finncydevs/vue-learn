<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    validator(value, props) {
      return value.trims().length != 0;
    },
  },
  price: {
    type: Number,
    required: true,
    validator(value, props) {
      return value > 0;
    },
  },
});
</script>
<template>
    <h1>Product</h1>
    <p>{{ product.id }}</p>
    <p>{{ product.name }}</p>
    <p>{{ product.price }}</p>
</template>

<style lang="scss" scoped></style>
