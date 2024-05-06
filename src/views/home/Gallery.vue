<template>
  <div class="row">
    <div class="left">
      <h2 class="underline">gallery</h2>
    </div>
    <div class="right">
      <div class="h-150 xl:h-[100vh] grid grid-cols-5 gap-1 gallery">
        <div
          class="col-span-2 row-span-2"
          :style="{
            'background-image': 'url(' + grid1Image + ')',
          }"
        ></div>
        <div
          class="col-span-3 row-span-4"
          :style="{
            'background-image': 'url(' + grid2Image + ')',
          }"
        ></div>
        <div
          class="col-span-2 row-span-3"
          :style="{
            'background-image': 'url(' + grid3Image + ')',
          }"
        ></div>
        <div
          class="col-span-3 row-span-1"
          :style="{
            'background-image': 'url(' + grid4Image + ')',
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import grid1Image from "../../assets/images/grid_1.jpeg";
import grid2Image from "../../assets/images/grid_2.jpg";
import grid3Image from "../../assets/images/grid_3.jpg";
import grid4Image from "../../assets/images/grid_4.jpg";
</script>

<style lang="scss">
.gallery {
  div {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>