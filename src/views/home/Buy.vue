<template>
  <div class="w-full row mt-40 xl:mt-1">
    <div class="left">
      <h2 class="underline">buy</h2>
    </div>
    <div class="right">
      <Image alt="buy" :src="BuyImage" ratio="video" />
    </div>
  </div>
</template>

<script setup>
import Image from "~/components/Image";
import BuyImage from "../../assets/images/buy.jpg";
</script>

<style lang="scss">
</style>
