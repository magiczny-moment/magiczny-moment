<template>
  <div class="card">
    <img class="object-cover w-full h-full object-t30" :src="image" />
    <div class="shine"></div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps({
  title: String,
  content: String,
  image: {
    type: String,
    default: 'https://place-hold.it/500x500'
  }
})

const { title, content, image } = toRefs(props)
</script>

<style scoped>
.shine {
  @apply mix-blend-lighten bg-gradient-to-br from-[#d5cfbd] via-transparent to-transparent absolute top-0 left-0 w-full h-full opacity-50;
}

.card {
  @apply overflow-hidden relative select-none bg-gradient-to-br from-[#424249] via-gray-800 to-gray-800 rounded-xl border border-accent;
}
</style>