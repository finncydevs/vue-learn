<script setup>
import { reactive } from "vue";
import ContactForm from "./ContactForm.vue";
import ContactList from "./ContactList.vue";

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
    <ContactForm v-model="contact" />

    <ContactList
      v-model:username.uppercase="contact.username"
      ,
      v-model:email="contact.email"
      v-model:age="contact.age"
      v-model:type="contact.type"
      v-model:complain="contact.compain"
      v-model:message="contact.messagge"
    />
  </div>
</template>

<style lang="scss" scoped></style>
