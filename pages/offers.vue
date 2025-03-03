<template>
  <main class="content-grid h-screen bg-[#0b171c] text-accent">
    <div>
      <h1 class="flex w-full">Oferty</h1>
      <div>
        <div class="embla" ref="emblaRef">
          <div class="embla__container">
            <div class="embla__slide">Slide 1</div>
            <div class="embla__slide">Slide 2</div>
            <div class="embla__slide">Slide 3</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

const [emblaRef] = emblaCarouselVue({ loop: true })

</script>

<style lang="css" scoped>
.embla {
  overflow: hidden;
}

.embla__container {
  display: flex;
}

.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
  border: 1px solid gray;
}
</style>
