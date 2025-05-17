<template>
  <main class="content-grid">
    <Navigation />
    <GenericOffer class="full-width" v-bind="section?.fields" />
  </main>
</template>

<script setup lang="ts">

const route = useRoute()

const { data: section } = await useAsyncData('offerpreview', async () => {
  return await queryContent('oferta').where({ '_stem': { $contains: route.params.id } }).findOne()
})

</script>