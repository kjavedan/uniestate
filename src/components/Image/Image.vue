<template>
  <div class="image-container relative">
    <v-lazy-image
      :src="src"
      :alt="alt"
      :class="[
        'top-0 left-0 w-full h-full object-cover',
        { 'xl:absolute': height === 'full' && true },
      ]"
      @load="imageLoaded = true"
    />
  </div>
</template>

<script setup>
import VLazyImage from "v-lazy-image";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  height: {
    type: String,
  },
});
console.log(props);
</script>

<style lang="scss" scoped>
.v-lazy-image {
  filter: blur(5px);
  transition: filter 1.6s;
  will-change: filter;
  background: #dfdfdf;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>