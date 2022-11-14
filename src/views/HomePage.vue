<script setup>
import { ref } from 'vue'
const title = ref('Fandom Forum Site')
</script>

<template>
  <main class="flex items-start justify-start">
    <h1 class="px-5 font-mono text-6xl font-bold italic text-black">{{ title }}</h1>
  </main>
</template>
