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
  @apply h-screen bg-gradient-to-r from-red-900 via-red-500 to-white;
}
</style>
