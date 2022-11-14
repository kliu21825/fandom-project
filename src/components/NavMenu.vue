<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/">About</RouterLink>
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/">Topics</RouterLink>
    <RouterLink to="/">Comments</RouterLink>
    <RouterLink to="/">Events</RouterLink>
    <RouterLink to="/">Polls</RouterLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex items-end justify-end space-x-4 px-5 py-9 font-bold text-slate-400;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
