<template>
    <h1>{{ title }}</h1>
    <div>
        <slot><p>Default text</p></slot>
    </div>
</template>

<script setup>
const title = defineProps({
    title: String
})
</script>

<style lang="scss" scoped>

</style>