<template>
  <div class="row cursor-auto">
    <div class="left">
      <h2 style="text-decoration" class="cursor-auto">
        what people say <span class="block">about us</span>
      </h2>
    </div>
    <div class="right">
      <div class="bg-[--clr-gray-light] w-full h-130 xl:h-150">
        <Carousel />
      </div>
    </div>
  </div>
</template>

<script setup>
import Carousel from "~/components/carousel/Carousel.vue";
</script>

<style lang="scss">
</style>