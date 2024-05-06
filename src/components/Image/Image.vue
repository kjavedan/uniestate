<template>
  <v-lazy-image
    :src="src"
    :alt="alt"
    class="w-full"
    @load="imageLoaded = true"
  />
</template>

<script setup>
import VLazyImage from "v-lazy-image";

defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
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