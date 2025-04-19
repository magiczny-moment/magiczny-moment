<template>
  <main class="bg-gray-900 content-grid text-accent">
    <Navigation :sections="sections" />
    <Witamy class="full-width" id="witamy" v-bind="witamy.fields" link="oferta" />
    <Offer :offers="offers" id="oferta" />
    <Contact id="kontakt" class="full-width" :content="contact">
      <ContentRenderer class="flex flex-col gap-4" :value="contact" />
    </Contact>
  </main>
</template>

<script setup lang="ts">
const sections = ref([
  { id: 'witamy', title: 'Witamy' },
  { id: 'oferta', title: 'Oferta' },
  { id: 'media', title: 'Media społecznościowe' },
  { id: 'kontakt', title: 'Kontakt' },
])

const { data: offers } = await useAsyncData('offers', async () => {
  return await queryContent('offers').find()
})
const { data: witamy } = await useAsyncData('witamy', async () => {
  return await queryContent().where({ title: { $contains: 'Witamy' } }).findOne();
});
const { data: contact } = await useAsyncData('contact', async () => {
  return await queryContent().where({ title: { $contains: 'Kontakt' } }).findOne();
});
</script>
