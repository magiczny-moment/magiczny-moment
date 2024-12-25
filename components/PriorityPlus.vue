<template>
  <slot />
</template>

<script setup lang="ts">
import { ref, watch, computed, toRaw, useSlots } from 'vue'

const slots = useSlots();
//const container = slots.default()[0].children[0];
const container = slots.default()[0];
//const childrens = container.children;

console.log("🚀 ~ container:", container)
//console.log("🚀 ~ childrens:", childrens)

</script>

<style scoped></style>