<script setup>
import NavMenu from '@/components/NavMenu.vue'
</script>

<template>
  <main>
    <NavMenu />
    <RouterView />
  </main>
</template>

<style lang="postcss" scoped>
main {
  @apply h-screen bg-gradient-to-t from-red-900 via-red-500 to-gray-500;
}
</style>
