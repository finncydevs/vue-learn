<script setup>
import { reactive, toRefs } from "vue";

const contact = reactive({
  email: "",
  username: "",
  age: 0,
  type: "regular",
  complain: false,
  message: "",
});
</script>
<template>
  <div>
    <form action="">
      <div>
        <label for="email">
          Email:
          <input type="email" v-model="contact.email" />
        </label>
        <label for="username">
          Username:
          <input type="text" id="username" v-model="contact.username" />
        </label>
        <label for="age">
          Age:
          <input id="age" type="number" v-model.number="contact.age" />
        </label>
        <label for="type"
          >Type:
          <select name="type" id="type" v-model="contact.type">
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

    <div>
      <h1>Preview</h1>
      <p>Username {{ contact.email }}</p>
      <p>Username {{ contact.username }}</p>
      <p>Username {{ contact.age }}</p>
      <p>Username {{ contact.type }}</p>
      <p>Username {{ contact.complain }}</p>
      <p>Username {{ contact.message }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
