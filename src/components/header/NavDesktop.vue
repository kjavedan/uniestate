<template>
  <div class="w-[50%]">
    <ul class="flex items-center gap-12">
      <RouterLink
        v-for="item in navData"
        :key="item.label"
        :to="{ name: item.name }"
        :class="[
          'nav-link whitespace-nowrap',
          { active: route.name === item.name },
        ]"
        >{{ item.label }}</RouterLink
      >
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import navData from "~/data/navConfig";

// NAVIGATION
const route = useRoute();
</script>

<style lang="scss">
.nav-link {
  color: black;
}
</style>