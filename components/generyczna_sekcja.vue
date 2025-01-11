<template>
  <section class="relative isolate overflow-hidden bg-gray-800 bg-cover h-section md:!h-screen"
    :class="{ '!h-screen': isAnimation }">
    <img :src="image"
      class="absolute top-0 left-0 z-10 object-cover object-left w-full h-full full-width md:animate-none"
      :class="{ 'animate-smooth-slide': isAnimation }" />
    <!-- Centered Text Content -->
    <div class="z-20 flex flex-row items-center justify-center h-full px-4 text-center text-white "
      :class="{ 'hidden': isAnimation }">

      <div
        class="flex flex-col max-w-xl p-8 mx-auto mb-8 text-lg text-left md:text-xl backdrop-blur-md rounded-xl shadow-[0px_0px_20px_rgba(0,0,0,0.7)]">
        <h2 class="mb-8 text-4xl font-bold md:text-6xl">
          {{ title }}
        </h2>
        <span>{{ content }}</span>

        <div class="flex items-center justify-end w-full mt-6">
          <span class="text-xl">{{ price }}</span>
          <Teleport to="#animation-close" :disabled="!isAnimation">
            <button
              class="flex items-center p-3 ml-4 font-semibold text-white rounded-full bg-accent hover:bg-accent-600"
              @click="$emit('preview-clicked')">
              <Icon :name="!isAnimation ? 'icon-park-outline:preview-open' : 'icon-park-outline:preview-close-one'"
                class="inline-block text-xl size-6" />
            </button>
          </Teleport>
          <a href="#oferta" class="px-6 py-3 ml-4 font-semibold text-white rounded-full bg-accent hover:bg-accent-600">
            Zamów
          </a>
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