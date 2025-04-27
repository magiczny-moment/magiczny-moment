<template>
  <main class="content-grid">
    <Navigation :sections="menuSections" />
    <GenericOffer class="full-width"
      v-bind="section.fields"
     />

  </main>
</template>

<script setup lang="ts">

const route = useRoute()

const { data: section } = await useAsyncData('offerpreview', async () => {
  return await queryContent('oferta').where({ '_stem': { $contains: route.params.id } }).findOne()
})
const menuSections = ref([
  { id: 'witamy', title: 'Witamy' },
  { id: 'oferta', title: 'Oferta' },
  { id: 'media', title: 'Media społecznościowe' },
  { id: 'kontakt', title: 'Kontakt' },
])

</script>