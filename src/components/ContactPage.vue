<template>
  <div class="wrapper">
    <h1>Contact Us!</h1>
  </div>
  <div class="message">
    <p>If you have any questions about this website, feel free to contact us.</p>
  </div>
  <section class="cards">
    <div class="card">
      <div class="card-content">
        <img class="logo" img src="/phone.svg" alt="logo" />
        <p class="category">Phone</p>
        <p>(956) 246-1357</p>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <img class="logo" img src="/email.svg" alt="logo" />
        <p class="category">Email</p>
        <p>email@address.com</p>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <img class="logo" img src="/calendar.svg" alt="logo" />
        <p class="category">Active Online Hours</p>
        <h2>Monday - Saturday: 9AM - 5PM</h2>
        <h2>Sunday: 8AM - 8PM</h2>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply text-center text-6xl font-bold text-black;
}
.message {
  @apply py-2 text-center text-base font-bold text-black;
}
.cards {
  @apply mx-auto grid h-1/4 w-3/4 auto-rows-auto grid-cols-3 gap-4 py-28;
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
