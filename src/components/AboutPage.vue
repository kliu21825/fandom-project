<template>
  <div class="title">
    <h1>About<br /></h1>
  </div>
  <div class="message">At Fandom Forum, feel free to take a look at our topics shown on this website.<br /></div>
  <img class="image" img src="/public/fandom-overload.jpeg" />
</template>

<style lang="postcss" scoped>
.title {
  @apply flex items-center justify-center text-5xl font-bold text-slate-900;
}
.message {
  @apply flex items-center justify-center py-5 text-base font-semibold text-slate-900;
}
.image {
  @apply mx-auto h-64;
}
</style>
