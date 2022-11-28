<template>
  <div class="welcome">Welcome to the Fandom!</div>
  <div class="text">Feel free to check out this site at anytime you want!</div>
  <img class="image" img src="/public/fandom.jpg" />
</template>

<style lang="postcss" scoped>
.image {
  @apply mx-auto h-80 px-6 py-6;
}
.welcome {
  @apply flex items-center justify-center py-6 text-3xl font-bold text-black;
}
.text {
  @apply flex items-center justify-center py-6 text-center font-semibold text-black;
}
</style>
