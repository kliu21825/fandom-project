<template>
  <div class="wrapper">
    <h1>About Fandom Forum Site<br /></h1>
  </div>
  <div class="message">At Fandom Forum, feel free to take a look at our topics shown on this website.<br /></div>
  <img class="overload" img src="/public/fandom-overload.jpeg" />
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply flex items-center justify-center text-6xl font-bold text-slate-400;
}
.message {
  @apply flex items-center justify-center py-6 text-xl italic text-slate-400;
}
.overload {
  @apply mx-auto h-64;
}
</style>
