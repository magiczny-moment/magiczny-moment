<template>
  <main class="bg-gray-900 content-grid text-accent">
    <Navigation />
    <div class="flex flex-col justify-end w-full py-4 md:justify-center h-section">
      <h1 class="mb-auto text-5xl md:mb-4">Oferta</h1>
      <div>
        <div class="overflow-hidden" ref="emblaRef">
          <div
            class="grid auto-cols-[80%] md:auto-cols-[calc(50%-1rem)] h-[calc(var(--section-height)*0.7)] grid-flow-col gap-4">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

const [emblaRef] = emblaCarouselVue()

const { data: sections } = await useAsyncData('sections', async () => {
  return await queryContent().find()
})

const cards = ref([]);

</script>
