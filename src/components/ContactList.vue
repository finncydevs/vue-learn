<template>
  <div>
    <div>
      <h1>Preview</h1>
      <p>Email: {{ contact.email }}</p>
      <p>Username: {{ contact.username }}</p>
      <p>Age: {{ contact.age }}</p>
      <p>Type: {{ contact.type }}</p>
      <p>Complain: {{ contact.complain }}</p>
      <p>Message: {{ contact.message }}</p>
    </div>
  </div>
</template>

<script setup>
const username = defineModel("username",{
    type: String,
    get: (value) => {
        if(nameModifiers.uppercase){
            return value.toUpperCase
        }else {
            return value
        }
    }
})
const email = defineModel("email",{
    type: String
})
const age = defineModel("age",{
    type: Number
})
const complain = defineModel("complain",{
    type: Boolean
})
const type = defineModel("type",{
    type: String
})
const message = defineModel("message",{
    type: String
})
</script>

<style lang="scss" scoped></style>
