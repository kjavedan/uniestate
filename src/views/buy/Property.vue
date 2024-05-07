<template>
  <div class="mt-4">
    <div v-for="property in propertiesData" :key="property.id" class="mb-20">
      <Image
        :src="property.img"
        :alt="property.title"
        :ratio="property.imgRatio"
      />

      <div class="px-8 py-2">
        <h3 class="font-light text-4xl">{{ property.title }}</h3>

        <div class="flex items-center mt-2">
          <div class="i-carbon:location-filled"></div>
          <span class="text-[#646464] text-sm">{{ property.address }}</span>
        </div>

        <p class="font-light mt-5 text-sm text-[#1F1F1F]">
          {{ property.description }}
        </p>

        <div class="flex items-center gap-3 mt-8">
          <Button title="details" />
          <Button title="map" variant="outline" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Image from "~/components/Image";
import Button from "~/components/button";

defineProps(["propertiesData"]);
</script>

<style lang="scss" scoped>
</style>