<script setup lang="ts">
defineProps<{
  img: string
  title: string
  price: string
  inventory: string
}>()
</script>

<template>
  <div class="bg-surface p-6 xl:p-8 rounded-2xl flex flex-col items-center gap-2 text-center text-white xl:text-lg">
    <img :src="img" alt="" class="size-36 xl:size-40 object-cover -mt-20 shadow-2xl rounded-full">
    <h3>{{ title }}</h3>
    <span>{{ price }}</span>
    <p class="text-light">
      {{ inventory }} Bowls available
    </p>
  </div>
</template>
