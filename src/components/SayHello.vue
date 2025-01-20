<script setup>
import { reactive } from "vue";
const person = reactive({
  firstname: "",
  lastname: "",
});
console.log("Hello");

function sayHello() {
  person.firstname = document.getElementById("firstname").value;
  person.lastname = document.getElementById("lastname").value;
}
function fullName() {
  console.log("Full name called");
  return `${person.firstname} ${person.lastname}`;
}

function changefirstname() {
  person.firstname = event.target.value;
}
function changelastname() {
  person.lastname = event.target.value;
}
</script>
<template>
  <div>
    <label for="firstname">Insert firstname</label>
    <input type="text" placeholder="First name" @input="changefirstname" />
    <br />

    <label for="lasttname">Insert lastname</label>
    <input type="text" @input="changelastname" placeholder="last name" /> <br />
    <button v-on:click="sayHello">Click me</button>
    <h1>{{ fullName() }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>
