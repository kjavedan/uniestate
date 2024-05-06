<template>
  <div class="p-4 lg:px-0 lg:flex lg:items-center lg:gap-12">
    <!-- ROW 1 -->
    <div class="flex items-center">
      <h4 class="text-lg font-[--font-primary] w-25">location:</h4>
      <div
        v-for="item in filtersData.location"
        :key="item.name"
        @click="handleChangeFilters(item.name, 'location')"
        :class="[
          'py-3 px-4 cursor-pointer',
          { 'bg-black text-white': item.isSelected },
        ]"
      >
        <span>{{ item.label }}</span>
      </div>
    </div>

    <!-- ROW 2 -->
    <div class="flex items-center mt-4 lg:mt-0">
      <h4 class="text-lg font-[--font-primary] w-25">Type:</h4>
      <div
        v-for="item in filtersData.type"
        :key="item.name"
        @click="handleChangeFilters(item.name, 'type')"
        :class="[
          'py-3 px-4 cursor-pointer',
          { 'bg-black text-white': item.isSelected },
        ]"
      >
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// DATA
const filtersData = ref({
  location: [
    { name: "all", label: "All", path: "", isSelected: true },
    { name: "dubai", label: "Dubai", path: "", isSelected: false },
    { name: "rak", label: "Ras Al Khaimah", path: "", isSelected: false },
  ],
  type: [
    { name: "all", label: "All", path: "", isSelected: true },
    { name: "villa", label: "Villa", path: "", isSelected: false },
    { name: "aprtment", label: "Apartment", path: "", isSelected: false },
  ],
});

// FUNC
const handleChangeFilters = (newVal, type) => {
  filtersData.value[type].map((item) =>
    item.name === newVal ? (item.isSelected = true) : (item.isSelected = false)
  );
};
</script>

<style lang="scss" scoped>
</style>