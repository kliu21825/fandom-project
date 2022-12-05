<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import router from '@/router'
const { login, logout } = useAuth()

const username = ref('')
const password = ref('')

const logUserIn = async () => {
  if (await login(username.value, password.value)) {
    if (router.query.redirect) {
      router.push(router.query.redirect)
    } else {
      router.push({ name: 'Home' })
    }
  } else {
    logout()
  }
}
</script>

<template>
  <body>
    <div class="login">
      <div class="title">Login</div>
      <form class="login-form" @submit.prevent="logUserIn">
        <div class="textbox">
          <input v-model="username" type="text" placeholder="Email" />
        </div>
        <div class="textbox">
          <input v-model="password" type="password" placeholder="Password" />
        </div>
        <button type="submit" class="submit">Log In</button>
        <router-link :to="{ path: '/signup' }">
          <button type="sign-up" class="register">New user? Sign up for free!</button></router-link
        >
      </form>
    </div>
  </body>
</template>

<style lang="postcss" scoped>
body {
  @apply items-center object-center py-10;
}
.login {
  @apply mx-auto h-1/5 w-1/4 justify-center rounded-3xl bg-zinc-700 p-16 text-center;
}
.title {
  @apply mx-auto items-center justify-center text-2xl font-semibold text-white;
}
.login-form {
  @apply m-0 grid w-full place-items-center gap-4 py-4;
}
.textbox {
  @apply relative h-14 w-full rounded-lg border-white;
}
.login-form input {
  @apply h-14 w-full rounded-lg bg-transparent text-lg text-white;
}
.register {
  @apply bg-transparent text-white underline;
}
.submit {
  @apply h-14 w-full cursor-pointer rounded-lg bg-white font-medium hover:bg-red-500 hover:text-white hover:shadow-md hover:shadow-zinc-600;
}
</style>
