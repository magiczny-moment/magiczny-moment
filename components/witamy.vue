<template>
  <figure class="relative h-section md:!h-screen overflow-hidden bg-gray-800 bg-cover">
    <video autoplay muted loop
      class="absolute top-0 left-0 object-cover object-center w-screen h-screen md:object-t30 full-width">
      <source src="/public/filmik_glowna.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <!-- Background Image -->


    <!-- Centered Text Content -->
    <div class="relative z-10 flex items-center justify-center h-full px-4 text-center md:pb-0 ">
      <div>
        <img src="/public/LOGO.png" alt="Logo" class="size-[400px] mx-auto mb-4 object-contain" />
        <div v-if="content?.length > 0" class="max-w-xl mx-auto mb-8 text-lg text-white md:text-xl">
          {{ content }}
        </div>
        <NuxtLink :to="`#${link}`"
          class="px-6 py-3 font-semibold text-gray-900 rounded-full bg-accent hover:bg-accent-600">
          Zobacz więcej
        </NuxtLink>
      </div>
    </div>
  </figure>
</template>

<script setup lang="ts">
defineProps({
  image: String,
  content: String,
  link: String
})
</script>