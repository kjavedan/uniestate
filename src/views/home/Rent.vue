<template>
  <div
    @click="$router.push({ name: 'rent' })"
    class="w-full row cursor-pointer"
  >
    <div class="left">
      <h2 class="underline">rent</h2>
    </div>
    <div class="right">
      <Image alt="Rent" :src="RentImage" ratio="video" />
    </div>
  </div>
</template>

<script setup>
import Image from "~/components/Image";
import RentImage from "../../assets/images/rent.jpg";
</script>

<style lang="scss">
</style>