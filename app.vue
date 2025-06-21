<script lang="ts" setup>
const showMenu = ref(false)
// const showOrder = ref(false)

function toggleMenu() {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <div class="bg-[#262837] w-full min-h-screen">
    <Sidebar :show-menu="showMenu" />
    <!-- Menu mobile -->
    <nav class="bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-2xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl">
      <button class="p-2">
        <Icon name="ri:user-3-line" />
      </button>
      <button class="p-2">
        <Icon name="ri:add-line" />
      </button>
      <button class="p-2">
        <Icon name="ri:pie-chart-line" />
      </button>
      <button class="p-2 text-white" @click="toggleMenu">
        <Icon :name="showMenu ? 'ri:close-line' : 'ri:menu-3-line'" />
      </button>
    </nav>
    <main class="lg:pl-28 grid grid-cols-1 lg:grid-cols-8 w-full " />
  </div>
</template>
