<script setup>
import { ref } from 'vue'
const title = ref('Fandom Forum Site')
</script>

<template>
  <main class="flex items-start justify-start">
    <h1 class="px-5 font-mono text-6xl font-bold text-black">{{ title }}</h1>
  </main>
  <img class="image" src="fandom.jpg" />
</template>

<style lang="postcss" scoped>
.image {
  @apply mx-auto px-4 py-8;
}
</style>
