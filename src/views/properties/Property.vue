<template>
  <div class="mt-4 xl:mt-0">
    <div
      v-for="property in propertiesData"
      :key="property.id"
      class="mb-20 xl:flex xl:flex-row-reverse xl:items-start xl:mb-1"
    >
      <Image
        :src="property.img"
        :alt="property.title"
        :ratio="property.imgRatio"
        class="xl:w-57%"
      />

      <div class="px-8 py-2 xl:w-43% xl:px-0 property__info">
        <h3 class="font-light">{{ property.title }}</h3>

        <div class="flex items-center mt-2">
          <div class="i-carbon:location-filled"></div>
          <span class="text-[#646464] text-sm xl:text-lg">{{
            property.address
          }}</span>
        </div>

        <p class="font-light mt-5 text-[#1F1F1F] max-w-140 pr-8">
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
.property__info {
  h3 {
    font-size: 3rem;
  }
}
@media screen and (min-width: 900px) {
  .property__info {
    h3 {
      font-size: 3.5rem;
    }
  }
}

@media screen and (min-width: 1400px) {
  .property__info {
    h3 {
      font-size: 4rem;
    }
  }
}

@media screen and (min-width: 1700px) {
  .property__info {
    h3 {
      font-size: 6rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
}
</style>