<script setup lang="ts">
defineProps<{
  img: string
  title: string
  price: string
}>()
</script>

<template>
  <div class="bg-surface p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
    <img :src="img" alt="" class="size-40 object-cover -mt-20 shadow-2xl rounded-full">
    <p class="text-xl">
      {{ title }}
    </p>
    <span class="text-gray-400">{{ price }}</span>
    <p class="text-gray-400">
      Available
    </p>
  </div>
</template>
