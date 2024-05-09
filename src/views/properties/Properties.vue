<template>
  <div class="lg:ml-[10.5%]">
    <Filters :filters="filters" :handleChangeFilters="handleChangeFilters" />
    <div>
      <Property :propertiesData="filteredData" />
    </div>
    <div
      v-if="!filteredData.length"
      class="w-90% md:w-300 my-10 xl:my-20 py-10 px-2 b-2 mx-auto flex items-center justify-center gap-2 b-dotted b-gray rounded-lg"
    >
      <div class="i-iconoir:file-not-found w-2em h-2em"></div>
      <p class="text-center">There is no property with this criteria</p>
    </div>
    <ContactUs />
  </div>
</template>

<script setup>
import ContactUs from "~/components/contact";
import Filters from "./Filters.vue";
import Property from "./Property.vue";

import propertiesData from "~/data/propertiesData";

import { ref, watch } from "vue";

// DATA
const filteredData = ref([...propertiesData]);

const filters = ref({
  location: [
    { value: "all", label: "All", path: "", isSelected: true },
    { value: "dubai", label: "Dubai", path: "", isSelected: false },
    { value: "sharjah", label: "Sharjah", path: "", isSelected: false },
    { value: "ajman", label: "Ajman", path: "", isSelected: false },
  ],
  type: [
    { value: "all", label: "All", path: "", isSelected: true },
    { value: "villa", label: "Villa", path: "", isSelected: false },
    { value: "apartment", label: "Apartment", path: "", isSelected: false },
  ],
});

const selectedFilters = ref({ location: "all", type: "all" });
// FUNC
const handleChangeFilters = (newVal, type) => {
  filters.value[type].map((item) => {
    if (item.value == newVal) {
      selectedFilters.value[type] = newVal;
      return (item.isSelected = true);
    } else {
      return (item.isSelected = false);
    }
  });
};

// HOOKS
watch(
  selectedFilters,
  () => {
    const newArr = [];
    propertiesData.map((property) => {
      if (
        (selectedFilters.value.location === "all" ||
          selectedFilters.value.location === property.locationCity) &&
        (selectedFilters.value.type === "all" ||
          selectedFilters.value.type === property.flatType)
      ) {
        newArr.push(property);
      }
    });
    filteredData.value = newArr;
  },
  { deep: true }
);
</script>

<style lang="scss" scoped>
</style>