<template>
  <div class="flex flex-col justify-end w-full py-4 md:justify-center h-section">
    <h1 class="mb-auto text-5xl md:mb-4">Oferta</h1>
    <div>
      <div class="overflow-hidden" ref="emblaRef">
        <div
          class="grid auto-cols-[80%] md:auto-cols-[calc(50%-1rem)] h-[calc(var(--section-height)*0.7)] grid-flow-col gap-4">
          <Card v-for="offer in offers" :image="offer.fields.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
const [emblaRef] = emblaCarouselVue()

const props = defineProps({
  offers: {
    type: Array,
    default: () => []
  }
});
const { offers } = toRefs(props)

</script>