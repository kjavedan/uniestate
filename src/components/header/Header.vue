<template>
  <div class="flex items-center justify-between p-4">
    <h1 @click="$router.push('/')" class="cursor-pointer lg:ml-[10%]">
      Uni<span class="text-[--clr-orange]">e</span>sate
    </h1>

    <NavMobile v-if="!xlAndUp" />
    <NavDesktop v-else />
  </div>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

import NavMobile from "./NavMobile.vue";
import NavDesktop from "./NavDesktop.vue";

const breakpoints = useBreakpoints(breakpointsTailwind);
const xlAndUp = breakpoints.greaterOrEqual("xl");
</script>

<style lang="scss">
.nav-link {
  color: var(--ep-text-color-primary);
  transition: all ease-in-out 0.1s;
  text-decoration: none;
  color: #111111;
  font-size: 1.1rem;
  font-weight: 400;
  font-family: Avenir;
  &:hover {
    color: var(--ep-color-primary);
  }

  &.active {
    color: var(--ep-color-primary);
    text-decoration: underline;
    font-weight: bold;
  }
}

.text-stroke {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--ep-text-color-primary);
  color: transparent;
}
</style>