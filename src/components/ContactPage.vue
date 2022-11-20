<template>
  <div class="wrapper">
    <h1>Contact Us!</h1>
  </div>
  <div>
    <div class="phone">Phone Number</div>
    <h4 class="number">(956) 246-1357</h4>
  </div>

  <div>
    <div class="email">Email</div>
    <h3 class="address">emailexample@address.com</h3>
  </div>
  <div class="hours">Active Hours:</div>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply items-start justify-start px-5 text-6xl font-bold text-yellow-600;
}
.phone {
  @apply items-start justify-start py-10 px-5 text-3xl font-semibold  text-yellow-400;
}
.number {
  @apply px-5 text-lg text-yellow-400 underline;
}
.email {
  @apply items-start justify-start py-8 px-5 text-3xl font-semibold text-yellow-400;
}
.address {
  @apply px-5 text-lg text-yellow-400 underline;
}
.hours {
  @apply items-start justify-start py-8 px-5 text-3xl font-semibold text-yellow-400;
}
</style>
