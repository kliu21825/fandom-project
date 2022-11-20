<template>
  <div class="title">
    <h1>About Fandom Forum Site<br /></h1>
  </div>
  <div class="message">At Fandom Forum, feel free to take a look at our topics shown on this website.<br /></div>
  <img class="image" img src="/public/fandom-overload.jpeg" />
</template>

<style lang="postcss" scoped>
.title {
  @apply flex items-center justify-center text-6xl font-bold text-slate-800;
}
.message {
  @apply flex items-center justify-center py-9 text-lg  font-semibold text-slate-800;
}
.image {
  @apply mx-auto h-64;
}
</style>
