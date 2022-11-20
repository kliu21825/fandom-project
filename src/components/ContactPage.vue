<template>
  <div class="wrapper">
    <h1>Contact Us!</h1>
  </div>
  <div class="cards">
    <div class="card">
      <div class="card-content">
        <p class="category">Phone</p>
        <h2>Phone Number</h2>
        <p>(956) 246-1357</p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply text-center text-6xl font-bold text-black;
}
.cards {
  @apply grid auto-rows-auto grid-cols-3 gap-4 py-40;
}
.card {
  @apply rounded border-2 bg-slate-100 p-3;
}
.card-content {
  @apply flex flex-col text-sm;
}
.category {
  @apply text-base font-semibold uppercase text-red-500;
}
</style>
