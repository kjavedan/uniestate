<template>
  <masonry-wall :items="items" :ssr-columns="3" :column-width="508" :gap="8">
    <template #default="{ item }">
      <div class="relative mb-4 lg:mb-0 overflow-hidden property__wrapper">
        <Image :src="item.img" :alt="item.alt" />
        <!-- Action -->
        <div
          class="flex items-start justify-between p-4 lg:absolute lg:w-full lg:bg-gradient-to-t from-black actions__position"
        >
          <!-- Details -->
          <div class="w-50% flex flex-wrap items-center gap-1">
            <div
              v-for="(detail, index) in item.details"
              :key="index"
              class="w-fit flex items-center text-sm gap-1 bg-[--clr-gray-light] p-2 rounded-md text-[#828282]"
            >
              <div :class="detail.icon"></div>
              <span>
                {{ detail.title }}
              </span>
            </div>
          </div>

          <!-- Button -->
          <Button title="details" :variant="lgAndUp ? '' : 'outline'" />
        </div>
      </div>
    </template>
  </masonry-wall>
</template>

<script setup>
import { mock, Random } from "mockjs";

import Button from "~/components/button";
import Image from "~/components/Image/";
import img1 from "~/assets/images/buy.jpg";
import img2 from "~/assets/images/rent.jpg";
import img3 from "~/assets/images/projects.jpg";
import img4 from "~/assets/images/grid_1.jpeg";
import img5 from "~/assets/images/grid_2.jpg";
import img6 from "~/assets/images/grid_3.jpg";
import img7 from "~/assets/images/grid_4.jpg";

import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const lgAndUp = breakpoints.greaterOrEqual("lg");

// Data options for img, title, and icon
const imgOptions = [img1, img2, img3, img4, img5, img6, img7];
const titleOptions = ["tower1", "tower2"];
const locationOptions = [
  { title: "dubai", icon: "i-carbon:location-filled" },
  { title: "rak", icon: "i-carbon:location-filled" },
  { title: "ajman", icon: "i-carbon:location-filled" },
  { title: "sharjah", icon: "i-carbon:location-filled" },
];
const roomOptions = [
  { title: "1BHK", icon: "i-material-symbols:bed" },
  { title: "2BHK", icon: "i-material-symbols:bed" },
  { title: "3BHK", icon: "i-material-symbols:bed" },
  { title: "studio", icon: "i-material-symbols:bed" },
];
const propertyOptions = [
  { title: "villa", icon: "i-material-symbols:villa-outline" },
  { title: "apartment", icon: "i-material-symbols:apartment" },
];

// Function to generate random detail
const generateDetail = (options) => {
  const selectedOption = Random.pick(options);
  return {
    title: selectedOption.title,
    icon: selectedOption.icon,
  };
};

// Mock data generation
const items = mock({
  "items|20": [
    {
      // Generate 20 items
      img: () => Random.pick(imgOptions), // Randomly choose an img from imgOptions
      title: () => Random.pick(titleOptions), // Randomly choose a title from titleOptions
      details: () => [
        generateDetail(locationOptions), // Generate location detail
        generateDetail(roomOptions), // Generate room detail
        generateDetail(propertyOptions), // Generate property detail
      ],
    },
  ],
}).items;
</script>

<style lang="scss" scoped>
.gradient-bg {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}
.property__wrapper {
  @media screen and (min-width: 1039px) {
    .actions__position {
      bottom: -20px;
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      opacity: 0;
    }
    &:hover {
      .actions__position {
        bottom: 0;
        opacity: 1;
      }
    }
  }
}
</style>