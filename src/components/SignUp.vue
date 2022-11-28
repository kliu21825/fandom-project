<script setup>
import { ref } from 'vue'
const username = ref('')
const password = ref('')
</script>

<template>
  <body>
    <div class="login">
      <div class="title">Sign Up</div>
      <form class="login-form" @submit.prevent="logUserIn">
        <div class="textbox">
          <input v-model="name" type="text" placeholder="Name" />
        </div>
        <div class="textbox">
          <input v-model="username" type="text" placeholder="Email" />
        </div>
        <div class="textbox">
          <input v-model="password" type="password" placeholder="Password" />
        </div>
        <button type="submit" class="submit">Register</button>
      </form>
    </div>
  </body>
</template>

<style lang="postcss" scoped>
body {
  @apply items-center object-center py-16;
}
.login {
  @apply mx-auto h-3/4 w-1/4 justify-center rounded-3xl bg-zinc-900 p-16 text-center;
}
.title {
  @apply mx-auto items-center justify-center text-2xl font-semibold text-white;
}
.login-form {
  @apply m-0 grid w-full place-items-center gap-4 py-4;
}
.textbox {
  @apply relative h-14 w-full rounded-lg border-red-500;
}
.login-form input {
  @apply h-14 w-full rounded-lg bg-transparent text-lg text-red-500;
}
.login-form submit {
  @apply bg-transparent;
}
.login-form button {
  @apply h-14 w-full cursor-pointer rounded-lg bg-white font-medium hover:bg-red-600 hover:text-white hover:shadow-md hover:shadow-zinc-800;
}
</style>
