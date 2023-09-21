<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'
onBeforeMount(() => {
  console.log(123)
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
