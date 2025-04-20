<template>
  <nav
    class="fixed bottom-0 z-50 w-full px-4 h-[--menu-height] bg-gray-900 
    bg-gradient-to-l md:bg-transparent md:bg-gradient-to-b from-gray-900/80 to-transparent md:top-0 backdrop-blur-md md:backdrop-blur-0  md:shadow-none shadow-[0px_0px_10px_rgba(0,0,0,0.5)] content-grid">
    <ul
      class="relative flex items-center justify-center w-full gap-8 p-4 overflow-x-auto truncate md:justify-start whitespace-nowrap hide-scroll-bar"
      ref="menuContainer">



      <li class="inline-block" v-for="(section, index) in visibleArray" :key="section.id"
        :class="{ 'md:mr-auto': index === 0 }">
        <NuxtLink :to="'#' + section.id" class="link" :class="{ 'link-active': isActive(section.id) && index !== 0 }">
          <span v-if="index === 0" class="md:text-4xl md:font-[eternals-universe]">
            <span class="hidden md:inline-block">
              Magiczny Moment
            </span>
            <span class="inline-block md:hidden">Początek</span>
          </span>
          <span v-else>{{ section.title }}</span>
        </NuxtLink>
      </li>

      <Menu v-if="showDrawer">
        <li class="inline-block">
          <MenuButton class="h-full pointer-events-auto link">
            Więcej
          </MenuButton>
        </li>
        <Teleport to="#popover">
          <Transition enter-active-class="transition-transform duration-500"
            leave-active-class="transition-transform duration-500" enter-from-class="translate-x-full"
            enter-to-class="translate-x-0" leave-from-class="translate-x-0" leave-to-class="translate-x-full">
            <MenuItems
              class="fixed z-[51] gap-8 right-0 top-0 flex flex-col flex-wrap whitespace-pre-line w-[300px] h-screen bg-gradient-to-b bg-gradient-to-b from-gray-900/80 to-gray-600/80 backdrop-blur-md p-8 shadow-drawer">
              <MenuButton class="inline link">
                <Icon name="icon-park-outline:close" class="inline-block text-xl size-6" />
              </MenuButton>

              <MenuItem v-for="(element) in asideArray" :key="element.innerHTML">
              <NuxtLink :to="'#' + element.id" class="self-start link" :class="{ 'link-active': isActive(element.id) }">
                {{ element.title }}
              </NuxtLink>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Teleport>
      </Menu>



    </ul>
  </nav>
</template>
<script setup lang="ts">
import { useRoute, useNuxtApp } from '#app';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'


const { $viewport } = useNuxtApp()


const props = defineProps({
  sections: {
    type: Array,
    required: true
  }
});
const { sections } = toRefs(props)

const route = useRoute()
const menuContainer = ref(null);

const visibleArray = ref([]);
const asideArray = ref([]);

watch($viewport.breakpoint, (newBreakpoint) => {
  let pointOfSplit
  if (['desktopWide', 'desktopMedium', 'desktop', 'tablet'].includes(newBreakpoint)) {
    pointOfSplit = sections.value.length
  } else if (['mobileWide', 'mobileMedium'].includes(newBreakpoint)) {
    pointOfSplit = 2
  }
  else {
    pointOfSplit = 1
  }

  visibleArray.value = sections.value.slice(0, pointOfSplit)
  asideArray.value = sections.value.slice(pointOfSplit, sections.value.length)
}, { immediate: true })


const showDrawer = computed(() => {
  return asideArray.value.length > 0
})

const isActive = (section) => {
  return route.hash === `#${section}`
}

</script>

<style scoped>
.link {
  @apply inline-block font-bold cursor-pointer text-accent hover:text-accent-600 text-shadow-sm shadow-gray-500;
}

.link-active {
  @apply border-b-2 border-accent;

}

.shadow-drawer {
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.8);
}

.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>