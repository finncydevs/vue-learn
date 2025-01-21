<script setup>
const model = defineModel({
  type: Object,
  required: true,
  get: (value) => {
    value.email = value.email.toUppercase();
    return value.email
  },
});
</script>
<template>
  <form action="">
    <div>
      <label for="email">
        Email:
        <input type="email" v-model="model.email" />
      </label>
      <label for="username">
        Username:
        <input type="text" id="username" v-model="model.username" />
      </label>
      <label for="age">
        Age:
        <input id="age" type="number" v-model.number="model.age" />
      </label>
      <label for="type"
        >Type:
        <select name="type" id="type" v-model="model.type">
          <option value="regular">regular</option>
          <option value="VIP">VIP</option>
          <option value="refugees">refugees</option>
        </select>
      </label>
      <label for="complain">
        Complain:
        <input
          type="checkbox"
          name="complain"
          id="complain"
          v-model="contact.complain"
        />
      </label>
      <label for="message"
        >Message
        <textarea
          name="message"
          id="message"
          v-model="contact.message"
        ></textarea>
      </label>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
