<template>
  <div
    @click="$router.push({ name: 'properties' })"
    class="w-full row cursor-pointer"
  >
    <div class="left">
      <h2 class="underline">projects</h2>
    </div>
    <div class="right">
      <Image alt="Projects" :src="ProjectsImage" ratio="portrait" />
    </div>
  </div>
</template>

<script setup>
import Image from "~/components/Image";
import ProjectsImage from "../../assets/images/projects.jpg";
</script>

<style lang="scss">
</style>