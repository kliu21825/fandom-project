<template>
  <div class="container">
    <div class="card">
      <img class="card-img" src="/check-mark.png" />
      <h2 class="thanks">Thank you!</h2>
      <p class="message">Thank you for scheduling an appointment with us!</p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.btn {
  @apply h-14 w-full cursor-pointer rounded-lg bg-white py-4 font-medium hover:bg-red-500 hover:text-black hover:shadow-md hover:shadow-zinc-900;
}
.card {
  @apply mx-auto h-1/5 w-1/4 justify-center rounded-3xl bg-slate-300 p-16 text-center;
}
.container {
  @apply justify-center rounded-md object-center py-4;
}
.card-img {
  @apply justify-center rounded-lg object-center;
}
.thanks {
  @apply py-4 text-center text-4xl font-medium;
}
.message {
  @apply py-4;
}
</style>
