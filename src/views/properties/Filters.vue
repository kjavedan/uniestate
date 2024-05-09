<template>
  <div
    class="p-4 w-full xl:ml-auto xl:flex xl:gap-8 xl:w-57% bg-[--clr-gray-light]"
  >
    <!-- ROW 1 -->
    <div class="flex items-center">
      <h4 class="md:text-lg font-[--font-primary] w-23">location:</h4>
      <div
        v-for="item in filters.location"
        :key="item.name"
        @click="handleChangeFilters(item.value, 'location')"
        :class="[
          'py-2 px-3 cursor-pointer',
          { 'bg-black text-white': item.isSelected },
        ]"
      >
        <span>{{ item.label }}</span>
      </div>
    </div>

    <!-- ROW 2 -->
    <div class="flex items-center mt-4 xl:mt-0">
      <h4 class="md:text-lg font-[--font-primary] w-23">Type:</h4>
      <div
        v-for="item in filters.type"
        :key="item.name"
        @click="handleChangeFilters(item.value, 'type')"
        :class="[
          'py-2 px-3 cursor-pointer',
          { 'bg-black text-white': item.isSelected },
        ]"
      >
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["filters", "handleChangeFilters"]);
</script>

<style lang="scss" scoped>
</style>