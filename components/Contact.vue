<template>
  <section class="relative overflow-y-auto bg-gray-800 bg-cover isolate h-section md:!h-screen">

    <div class="z-20 flex flex-row items-center justify-center h-full p-4 text-center text-white md:p-0 ">
      <leaf />
      <div
        class="flex flex-col max-w-xl p-8 mx-auto mb-8 text-lg text-left md:text-xl backdrop-blur-md rounded-xl shadow-[0px_0px_20px_rgba(0,0,0,0.7)]">
        <h2 class="mb-8 text-4xl font-bold !leading-snug md:text-6xl">
          Kontakt
        </h2>
        <span>{{ content }}</span>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import leaf from '~/assets/listek.svg?inline'
defineProps({
  content: String
})
</script>
