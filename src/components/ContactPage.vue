<template>
  <div class="wrapper">
    <h1>Contact Us!</h1>
  </div>
  <section class="cards">
    <div class="card">
      <div class="card-content">
        <img class="logo" img src="/phone.svg" alt="logo" />
        <p class="category">Phone</p>
        <h2>Phone Number</h2>
        <p>(956) 246-1357</p>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <img class="logo" img src="/email.svg" alt="logo" />
        <p class="category">Email</p>
        <h2>Email Address</h2>
        <p>email@address.com</p>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <img class="logo" img src="/calendar.svg" alt="logo" />
        <p class="category">Active Hours</p>
        <h2>Hours</h2>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply text-center text-6xl font-bold text-black;
}
.cards {
  @apply mx-auto grid h-3/4 w-3/4 auto-rows-auto grid-cols-3 gap-4 py-40;
}
.logo {
  @apply mx-auto h-1/2 w-1/2;
}
.card {
  @apply rounded border-2 bg-gradient-to-t from-gray-200 via-gray-300 to-gray-100 p-5 text-center drop-shadow-lg transition-transform duration-300 hover:scale-100 hover:shadow-xl;
}
.card-content {
  @apply flex flex-col text-sm;
}
.category {
  @apply text-base font-semibold uppercase text-red-500;
}
</style>
