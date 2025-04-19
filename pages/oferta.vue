<template>
  <main class="content-grid">
    <Navigation v-if="!isAnimationAnywhere" :sections="sections" />
    <template v-for="(section, index) in sections" :key="section._id">
      <template v-if="section._stem.indexOf('witamy') > -1">
        <Witamy class="full-width" :id="useGenHumanReadableId(section._stem)" v-bind="section.fields"
          :link="useGenHumanReadableId(sections[index + 1]._stem)" />
      </template>
      <template v-else>
        <GenerycznaSekcja class="full-width"
          :class="{ 'mb-[--menu-height]': index + 1 === lengthOfSections && !isAnimationAnywhere }"
          :id="useGenHumanReadableId(section._stem)" :isAnimation="isAnimation[index]" v-bind="section.fields"
          @preview-clicked="previewClicked(index)" />
      </template>

      <!-- <ContentRendererMarkdown :value="section.body" /> -->
    </template>
  </main>
</template>

<script setup lang="ts">
import { useGenHumanReadableId } from '../composable/useGenHumanReadableId'

const { data: sections } = await useAsyncData('sections', async () => {
  return await queryContent().find()
})

const dataForMenu = sections.value.map((section) => {
  return {
    id: useGenHumanReadableId(section._stem),
    title: section.fields.title,
  }
})
const lengthOfSections = computed(() => toRaw(sections.value).length).value

const isAnimation = ref([])
isAnimation.value = Array(lengthOfSections).fill(false)
const previewClicked = (index: number) => {
  isAnimation.value = isAnimation.value.map((elem, i) => index === i ? !elem : elem)
}
const isAnimationAnywhere = ref(false);

watch(isAnimation, (newIsAnimation, oldIsAnimation) => {
  isAnimationAnywhere.value = newIsAnimation.some((elem) => elem)
})
</script>

<style lang="css">
.cos {}
</style>