<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { isAuthenticated, logout } = useAuth()

const brand = ref(import.meta.env.VITE_APP_NAME)
</script>

<template>
  <nav>
    <div class="title">
      <RouterLink :to="{ name: 'Home' }" class="brand">
        <span class="brand-title">{{ brand }}</span>
      </RouterLink>
    </div>
    <div v-if="isAuthenticated">
      <strong>Welcome back!!!</strong>
      <router-link :to="{ name: 'Book Now' }" class="menu-item">Book Now</router-link>
      <button class="menu-item" @click="logout">Logout</button>
    </div>
    <div v-else>
      <router-link :to="{ name: 'Home' }" class="menu-item">Home</router-link>
      <router-link :to="{ name: 'Services' }" class="menu-item">About</router-link>
      <router-link :to="{ name: 'Contact' }" class="menu-item">Contact</router-link>
      <router-link :to="{ name: 'Login' }" class="menu-item">Login</router-link>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex items-start justify-between space-x-2 px-5 py-4 text-black;
  .title {
    @apply text-5xl font-bold;
  }
  .menu-item {
    @apply items-center justify-center space-x-2 px-5 font-semibold text-slate-800;
  }
  & .router-link-active {
    @apply font-bold underline underline-offset-4;
  }
}
</style>
