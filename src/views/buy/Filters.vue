<template>
  <div class="p-4 lg:px-0">
    <!-- ROW 1 -->
    <div class="flex items-center">
      <h4 class="text-lg font-[--font-primary] w-25">location:</h4>
      <div
        v-for="item in filters.location"
        :key="item.name"
        @click="handleChangeFilters(item.value, 'location')"
        :class="[
          'py-3 px-4 cursor-pointer',
          { 'bg-black text-white': item.isSelected },
        ]"
      >
        <span>{{ item.label }}</span>
      </div>
    </div>

    <!-- ROW 2 -->
    <div class="flex items-center mt-4">
      <h4 class="text-lg font-[--font-primary] w-25">Type:</h4>
      <div
        v-for="item in filters.type"
        :key="item.name"
        @click="handleChangeFilters(item.value, 'type')"
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
defineProps(["filters", "handleChangeFilters"]);
</script>

<style lang="scss" scoped>
</style>