<template>
  <nav>
    <div class="menu-item"><router-link :to="{ name: 'Home' }">Home</router-link></div>
    <div class="menu-item"><router-link :to="{ name: 'About' }">About</router-link></div>
    <div class="menu-item"><router-link :to="{ name: 'Contact' }">Contact</router-link></div>
    <div class="menu-item"><router-link :to="{ name: 'Login' }">Login</router-link></div>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex items-end justify-end space-x-4 px-5 py-4 font-bold text-black;
  .menu-item {
    @apply items-center justify-center;
  }
  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
