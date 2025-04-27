<template>
  <section class="relative overflow-y-auto bg-gray-800 bg-cover isolate h-section md:!h-screen"
    :class="{ '!h-screen': isAnimation }">
    <img :src="image" class="absolute top-0 left-0 z-10 object-cover object-left w-full h-full full-width" />

    <div class="z-20 flex flex-row items-center justify-center h-full p-4 text-center text-white md:p-0 "
      :class="{ 'hidden': isAnimation }">

      <div
        class="flex flex-col max-w-xl p-8 mx-auto mb-8 text-lg text-left md:text-xl backdrop-blur-md rounded-xl shadow-[0px_0px_20px_rgba(0,0,0,0.7)]">
        <h2 class="mb-8 text-4xl font-bold !leading-snug md:text-6xl">
          {{ title }}
        </h2>
        <span>{{ content }}</span>

        <div class="flex flex-col items-end justify-end w-full gap-4 mt-6 md:items-center md:flex-row">
          <span class="text-xl">{{ price }}</span>
          <div class="inline-flex">
            <button>Galeria</button>
            <a href="#oferta"
              class="px-6 py-3 ml-4 font-semibold text-white rounded-full h-14 bg-accent hover:bg-accent-600">
              Zamów
            </a>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  image: String,
  title: String,
  content: String,
  price: String,
  isAnimation: Boolean
})
</script>