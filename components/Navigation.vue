<template>
  <nav
    class="fixed bottom-0 z-50 w-full px-4 h-[--menu-height] bg-gray-900 
    bg-gradient-to-l md:bg-transparent md:bg-gradient-to-b from-gray-900/80 to-transparent md:top-0 backdrop-blur-md md:backdrop-blur-0  md:shadow-none shadow-[0px_0px_10px_rgba(0,0,0,0.5)] content-grid">
    <ul
      class="relative flex items-center justify-center w-full gap-8 p-4 overflow-x-auto truncate md:justify-start whitespace-nowrap hide-scroll-bar"
      ref="menuContainer">


      <div class="fixed -top-[999999px]" aria-hidden="true">
        <li class="inline-block" v-for="(section, index) in sections" :key="section._id"
          :class="{ 'md:mr-auto': index === 0 }" :ref="(el) => { return navElements.push(el) }">
          <a :href="'#' + useGenHumanReadableId(section._stem)" class="link ">
            <span v-if="index === 0" class="md:text-4xl md:font-[eternals-universe]">
              <span class="hidden md:inline-block">
                Magiczny Moment
              </span>
              <span class="inline-block md:hidden">Początek</span>
            </span>
            <span v-else>{{ section.fields.title }}</span>
          </a>
        </li>
        <li class="inline-block" ref="menuButton">
          <a class="link ">
            Więcej
          </a>
        </li>
      </div>

      <template v-for="element in visibleArray">
        <component :is="element.tagName" v-bind="{ class: element.classList.toString() }" v-html="element.innerHTML"
          data-nosnippet />
      </template>


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
              <component is="div" v-bind="{ class: element.classList.toString() }" v-html="element.innerHTML"
                data-nosnippet />
              </MenuItem>
            </MenuItems>
          </Transition>
        </Teleport>
      </Menu>



    </ul>
  </nav>
</template>
<script setup lang="ts">
import { useGenHumanReadableId } from '~/composable/useGenHumanReadableId'
import usePriorityPlus from '~/composable/usePriorityPlus';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const { data: sections } = await useAsyncData('sections', async () => {
  return await queryContent().find()
})

const navElements = ref([]);
const menuContainer = ref(null);
const menuButton = ref(null);

const { visibleArray, asideArray } = usePriorityPlus(menuContainer, navElements, menuButton);


const showDrawer = computed(() => {
  return toRaw(asideArray.value)?.length > 0
})

</script>

<style scoped>
.link {
  @apply inline-block font-bold cursor-pointer text-accent hover:text-accent-600 text-shadow-sm shadow-gray-500;
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