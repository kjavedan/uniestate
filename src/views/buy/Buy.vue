<template>
  <div class="lg:ml-[11%]">
    <Filters />
    <div>
      <Property />
    </div>

    <ContactUs />
  </div>
</template>

<script setup>
import ContactUs from "~/components/contact";
import Filters from "./Filters.vue";
import Property from "./Property.vue";
</script>

<style lang="scss" scoped>
</style>