<template>
  <main class="bg-gray-900 content-grid text-accent">
    <section class="relative overflow-hidden isolate h-section md:!h-screen full-width">
      <Icon
        class="absolute left-[-100px] sm:left-[-300px] top-[-50px] sm:top-[120px] rotate-[70deg] size-full sm:size-1/3"
        name="my-icon:listek" />
      <Icon class="absolute left-[-200px] top-[-20px] rotate-[40deg] size-1/3" name="my-icon:listek" />
      <Icon class="absolute right-[-200px] bottom-[-40px] rotate-[320deg] size-1/3 scale-x-[-1] "
        name="my-icon:listek" />
      <Icon class="absolute right-[-200px] bottom-[200px] rotate-[5deg] size-1/3 scale-x-[-1] " name="my-icon:listek" />

      <div class="z-20 flex flex-row items-center justify-center h-full p-4 text-center text-accent md:p-0 ">
        <div
          class="flex flex-col w-full p-8 mx-auto mb-8 text-lg text-left md:text-xl backdrop-blur-md rounded-xl shadow-[0px_0px_20px_rgba(0,0,0,0.7)]">
          <h2 class="mb-8 text-4xl font-bold !leading-snug md:text-6xl">
            404
          </h2>
          Brak takiej strony.<br />
          <NuxtLink to="/" class="text-accent hover:text-accent-600">Wróć do strony głównej</NuxtLink>
        </div>

      </div>
    </section>
  </main>
</template>


<script setup lang="ts">
defineProps(['error']);
</script>

<style lang="css">
@import "./assets/styles/global.css";
</style>