<template>
  <figure class="card">
    <img class="object-cover w-full h-full object-t30" :src="image" />
    <div
      class="absolute bottom-0 flex flex-col items-start justify-end w-full gap-2 p-4 h-2/6 bg-gradient-to-t from-gray-900/90 to-transparent">
      <h2 class="text-2xl">{{ title || 'Coś' }}</h2>
      <div class="">{{ content || ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit amet laborum rerum,
        dolores alias, cupiditate non provident inventore, id quis repellendus ? Error praesentium, fugiat dolorum omnis
        maiores facere fuga possimus?` }}

      </div>
    </div>
  </figure>
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
  @apply overflow-hidden relative select-none bg-gradient-to-br from-[#424249] via-gray-800 to-gray-800 rounded-xl;
}
</style>