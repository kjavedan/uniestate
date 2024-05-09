<template>
  <masonry-wall
    :items="propertiesData"
    :ssr-columns="3"
    :column-width="450"
    :gap="8"
  >
    <template #default="{ item }">
      <div class="relative mb-4 overflow-hidden property__wrapper">
        <Image :src="item.propertyCover" :alt="item.title" />
        <!-- Action -->
        <div
          class="flex items-start justify-between p-4 lg:w-full lg:bg-gradient-to-t from-black actions__position"
        >
          <!-- Details -->
          <div class="w-50% flex flex-wrap items-center gap-1">
            <!-- Location -->
            <div
              class="w-fit flex items-center text-sm gap-1 bg-[--clr-gray-light] p-2 rounded-md text-[#828282]"
            >
              <div class="i-carbon:location-filled"></div>
              <span class="capitalize">
                {{ item.locationCity }}
              </span>
            </div>

            <!-- Number of rooms -->
            <div
              class="w-fit flex items-center text-sm gap-1 bg-[--clr-gray-light] p-2 rounded-md text-[#828282]"
            >
              <div class="i-material-symbols:bed"></div>
              <span class="capitalize">
                {{ item.roomCount ? item.roomCount : "studio" }}
              </span>
            </div>
            <!-- Location -->
            <div
              class="w-fit flex items-center text-sm gap-1 bg-[--clr-gray-light] p-2 rounded-md text-[#828282]"
            >
              <div
                :class="{
                  'i-material-symbols:villa-outline': item.flatType === 'villa',
                  'i-material-symbols:apartment': item.flatType !== 'villa',
                }"
              ></div>

              <span class="capitalize">
                {{ item.flatType }}
              </span>
            </div>
          </div>

          <!-- ACTIONS -->
          <div class="flex items-center gap-1">
            <Button
              :id="0"
              title="map"
              variant="outline"
              size="small"
              :goTo="item.locationLink"
            />
            <Button
              :id="item.id"
              title="details"
              variant="primary"
              size="small"
            />
          </div>
        </div>
      </div>
    </template>
  </masonry-wall>
</template>

<script setup>
import Button from "~/components/button";
import Image from "~/components/Image/";

import propertiesData from "~/data/propertiesData";

const propertyOptions = [
  { title: "villa", icon: "i-material-symbols:villa-outline" },
  { title: "apartment", icon: "i-material-symbols:apartment" },
];

console.log(propertiesData);
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
  @media screen and (min-width: 913px) {
    margin-bottom: 0;
    .actions__position {
      position: absolute;
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