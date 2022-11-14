<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>

<template>
  <form class="login-form" @submit.prevent="logUserIn">
    <input v-model="username" type="text" placeholder="Email Address" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit" class="submit">Log In</button>
    <button type="sign-up" class="register">New user? Sign up</button>
  </form>
</template>

<style scoped lang="postcss">
.login-form {
  @apply mx-auto mt-56 flex max-w-lg flex-col gap-4 rounded-md p-3 shadow-lg;
  & input {
    @apply rounded-md border-b-4 border-b-black py-2 px-4 text-center text-xl ring-1 ring-black;
  }
}
.submit {
  @apply mx-44 mt-5 rounded-lg bg-yellow-500 py-2 px-4 text-xl font-semibold text-slate-300 shadow-lg hover:bg-white hover:text-yellow-500;
}
.register {
  @apply mt-3 text-white;
}
</style>
