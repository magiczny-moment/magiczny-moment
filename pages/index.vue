<template>
  <main class="bg-gray-900 content-grid text-accent">
    <Navigation />
    <Witamy class="full-width" id="witamy" v-bind="witamy.fields" link="oferta" />
    <OfferCarousel :offers="offers" id="oferta" />
    <Contact id="kontakt" class="full-width">
      <ContentRenderer class="flex flex-col gap-4" :value="contact" />
    </Contact>
  </main>
</template>

<script setup lang="ts">


const { data: offers } = await useAsyncData('offers', async () => {
  const result = await queryContent('oferta').find();
  return result.map((offer) => {
    return {
      ...offer.fields,
      link: offer._path,
    }
  });
})
const { data: witamy } = await useAsyncData('witamy', async () => {
  return await queryContent().where({ title: { $contains: 'Witamy' } }).findOne();
});
const { data: contact } = await useAsyncData('contact', async () => {
  return await queryContent().where({ title: { $contains: 'Kontakt' } }).findOne();
});
</script>
