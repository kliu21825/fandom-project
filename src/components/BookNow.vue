<script setup></script>

<template>
  <div class="wrapper">
    <h1>CHECK OUT WHAT WE DO IN THIS SERVER!</h1>
  </div>
  <div class="message">
    <p>Please fill out the form below to schedule an appointment with us.</p>
  </div>
  <body>
    <div class="appointment">
      <div class="title">Book Now</div>
      <form class="appointment-form">
        <div class="textbox">
          <input v-model="address" type="text" placeholder="Address" />
        </div>
        <div class="textbox">
          <input v-model="phone" type="tel" placeholder="Phone Number" />
        </div>
        <div class="date">
          <input v-model="date" type="date" />
        </div>

        <div class="dropdown-content">
          <p class="vehicle">
            Select vehicle type:
            <select id="cars" class="cars">
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="truck">Truck</option>
              <option value="van">Van</option>
            </select>
          </p>
          <button type="submit" class="submit">Submit</button>
        </div>
      </form>
    </div>
  </body>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply text-center text-3xl font-bold text-white;
}
.message {
  @apply py-4 text-center text-base font-medium italic text-white;
}
body {
  @apply items-center object-center;
}
.appointment {
  @apply mx-auto h-1/5 w-1/3 justify-center rounded-3xl bg-zinc-900 p-12 text-center;
}
.title {
  @apply mx-auto items-center justify-center text-2xl font-semibold text-white;
}
.appointment-form {
  @apply m-0 grid w-full place-items-center gap-2;
}
.textbox {
  @apply relative h-14 rounded-lg border-white;
}
.dropdown-content {
  @apply text-black;
}
.vehicle {
  @apply text-white;
}
.cars {
  @apply text-black;
}
.submit {
  @apply h-14 w-full cursor-pointer rounded-lg bg-red-500 font-medium hover:bg-white hover:text-black hover:shadow-md hover:shadow-zinc-900;
}
.btn {
  @apply h-4 w-10 cursor-pointer  rounded-t-3xl bg-slate-500 p-2 text-xl font-medium outline-none;
}
.popup {
  @apply absolute top-1/2 left-2/4 mt-10 w-96 translate-x-2/4 translate-y-2/4 rounded-md bg-white;
}
.container {
  @apply top-1/2 h-auto w-80 rounded-md;
}
#click {
  @apply hidden;
}
#click:checked ~ .container {
  @apply visible;
}
.popup-img {
  @apply m-11 w-24 place-items-center justify-center rounded-lg;
}
.thanks {
  @apply text-center text-4xl font-medium;
}
</style>
