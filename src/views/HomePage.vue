<script setup>
import { ref } from 'vue'
const title = ref('Fandom Forum Site')
</script>

<template>
  <main class="flex items-start justify-start">
    <h1 class="px-5 font-mono text-6xl font-bold text-black">{{ title }}</h1>
  </main>
  <img class="image" img src="/public/fandom.jpg" />
  <div class="welcome">Welcome to the Fandom!</div>
  <div class="text">Feel free to check out this site at anytime you want!</div>
</template>

<style lang="postcss" scoped>
.image {
  @apply mx-auto h-80 px-4 py-10;
}
.welcome {
  @apply flex items-center justify-center;
}
.text {
  @apply flex items-center justify-center py-5;
}
</style>
