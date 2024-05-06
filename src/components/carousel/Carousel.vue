<template>
  <carousel :items-to-show="1" :autoplay="4000">
    <slide v-for="slide in 10" :key="slide">
      <div class="h-120 xl:h-140 w-full flex">
        <div class="w-[30%] flex justify-right">
          <div
            class="w-[75%] h-[75%] xl:h-[85%] bg-cover bg-no-repeat bg-center"
            :style="{
              'background-image': 'url(' + girlImage + ')',
            }"
          ></div>
        </div>
        <div class="w-[70%] p-8">
          <div class="w-full text-left xl:mt-[7%]">
            <div class="i-fa:quote-left"></div>
            <div class="mt-6 text-[--clr-gray]">
              <span class="leading-7">
                my experience with Uniestate was very comfortable, and the
                submission of transactions trough Mr. Abdul Jabbar was smooth
                and free of any complexity.
              </span>
              <span class="block mt-4">
                My rating for the service is 5 stars.
              </span>
              <span class="block"> My review for Mr. Abdul is 5 stars. </span>

              <div class="mt-10 flex items-center gap-4">
                <h3>~ Rami</h3>
                <div>
                  <div class="i-fluent-emoji-flat:star"></div>
                  <div class="i-fluent-emoji-flat:star"></div>
                  <div class="i-fluent-emoji-flat:star"></div>
                  <div class="i-fluent-emoji-flat:star"></div>
                  <div class="i-fluent-emoji-flat:star"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import girlImage from "../../assets/images/girl.jpg";
</script>

<style lang="scss">
.carousel__prev,
.carousel__next {
  display: none;
}
</style>