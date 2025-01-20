<script setup>
import { ref, watch } from "vue";
import ProductDetail from "./ProductDetail.vue";
const productID = ref("");
const product = ref(null);

watch(productID, async (newVal, olVal) => {
  if (newVal) {
    const respon = await fetch(`/${newVal}.json`);
    product.value = await respon.json();
  } else {
    product.value = null;
  }
});
</script>
<template>
  <label for="productID"
    >Product ID:
    <select v-model="productID">
      <option value="">Pilih product</option>
      <option value="product1">Bakso 1</option>
      <option value="product2">Bakso 2</option>
      <option value="product3">Bakso 3</option>
    </select>
  </label>
  <ProductDetail :id="product.id" :name="product.name" :price="product.price" />
</template>

<style lang="scss" scoped></style>
