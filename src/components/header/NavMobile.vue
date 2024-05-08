<template>
  <div>
    <div @click="openMenu" class="bg-black p-3 rounded-full cursor-pointer">
      <div class="i-mingcute:menu-fill:menu" style="color: white"></div>
    </div>

    <div :class="['main__content p-4', { 'nav-is-open': isMenu }]">
      <div class="ml-15 flex items-center justify-between">
        <h3 class="font-light font-italic">navigation</h3>
        <div
          @click="closeMenu"
          class="w-3em h-3em flex ml-auto items-center justify-center rounded-full b-solid b-white cursor-pointer"
        >
          <div class="i-ic:round-close h-2em w-2em cursor-pointer"></div>
        </div>
      </div>
      <ul class="flex flex-col gap-8 text-3xl ml-15 mt-25 md:text-5xl">
        <RouterLink
          v-for="item in navData"
          :key="item.label"
          :to="{ name: item.name }"
          :class="['nav-link', { active: route.name === item.name }]"
          >{{ item.label }}</RouterLink
        >
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import navData from "~/data/navConfig";

// NAVIGATION
const route = useRoute();

const isMenu = ref(false);

// FUNCS
const openMenu = () => {
  isMenu.value = true;
  document.body.style.overflow = "hidden";
};

const closeMenu = () => {
  isMenu.value = false;
  document.body.style.overflow = "";
};
// HOOKS
watch(route, () => {
  isMenu.value = false;
});
</script>

<style scoped>
.main {
  overflow: hidden;
}

.main__content {
  position: fixed;
  top: 0;
  left: -100vw;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  background-color: black;
  color: white;
  will-change: transform;
  transition: transform 0.5s cubic-bezier(0.91, 0.01, 0.6, 0.99);
}

.nav-is-open {
  transform: translateX(100vw);
}
</style>