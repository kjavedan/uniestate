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

import img1 from "../../assets/images/buy.jpg";
import img2 from "../../assets/images/rent.jpg";
import img3 from "../../assets/images/projects.jpg";

import { ref, watch } from "vue";

// DATA
const propertiesData = ref([
  {
    id: 0,
    title: "Union Tower",
    address: " BUSINESS BAY, DUBAI",
    description:
      "Uniion Tower is located in the heart of the city, the bustling commercial and residential district of Dubai consisting of prestigious offices.",
    img: img1,
    imgRatio: "video",
    location: "dubai",
    type: "villa",
  },
  {
    id: 1,
    title: "Rak Tower",
    address: " AL NAKEEL, RAS AL KHAIMAH",
    description:
      "RAK Tower is located in the heart of the city, the bustling commercial and residential district of Ras Al Khaimah consisting of prestigious offices.",
    img: img2,
    imgRatio: "video",
    location: "rak",
    type: "villa",
  },
  {
    id: 2,
    title: "Millennium Tower",
    address: " AL NAKEEL, RAS AL KHAIMAH",
    description:
      "Millennium Tower is located in the heart of the city, the bustling commercial and residential district of Ras Al Khaimah consisting of prestigious offices.",
    img: img3,
    imgRatio: "portrait",
    location: "rak",
    type: "apartment",
  },
]);

const filteredData = ref([...propertiesData.value]);

const filters = ref({
  location: [
    { value: "all", label: "All", path: "", isSelected: true },
    { value: "dubai", label: "Dubai", path: "", isSelected: false },
    { value: "rak", label: "Rak", path: "", isSelected: false },
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
    propertiesData.value.map((property) => {
      if (
        (selectedFilters.value.location === "all" ||
          selectedFilters.value.location === property.location) &&
        (selectedFilters.value.type === "all" ||
          selectedFilters.value.type === property.type)
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