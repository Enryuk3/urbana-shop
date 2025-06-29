<script lang="ts" setup>
const showMenu = ref(false)
const showOrder = ref(false)

function toggleMenu() {
  showMenu.value = !showMenu.value
  showOrder.value = false
}

function toggleOrder() {
  showOrder.value = !showOrder.value
  showMenu.value = false
}

useHead({
  title: 'Urbana shop',
  meta: [
    { name: 'description', content: 'Food delivery app' },
  ],
  bodyAttrs: {
    class: 'bg-background',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
  ],
})
</script>

<template>
  <div class="bg-background w-full min-h-screen">
    <Sidebar :show-menu="showMenu" />
    <Cart :show-order="showOrder" @toggle-order="toggleOrder" />

    <!-- Menu mobile -->
    <nav class="bg-surface lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
      <button class="p-2">
        <Icon name="ri:user-3-line" />
      </button>
      <button class="p-2">
        <Icon name="ri:add-line" />
      </button>
      <button class="p-2" @click="toggleOrder">
        <Icon name="ri:pie-chart-line" />
      </button>
      <button class="p-2 text-white" @click="toggleMenu">
        <Icon :name="showMenu ? 'ri:close-line' : 'ri:menu-3-line'" />
      </button>
    </nav>

    <main class="lg:pl-[106px] lg:pr-[409px] pb-20">
      <div class="md:p-8 p-6">
        <!-- Header -->
        <Header />
        <!-- Title content -->
        <div class="flex items-center justify-between mb-16">
          <h2 class="text-xl text-white">
            Choose dishes
          </h2>
          <button class="flex items-center gap-2.5 text-white bg-surface p-[14px] font-medium text-sm rounded-lg outline outline-[#393C49]">
            <Icon name="ri:arrow-down-s-line" class="size-5" /> Dine in
          </button>
        </div>
        <!-- Content -->
        <div class="grid grid-cols-[repeat(auto-fill,minmax(192px,1fr))] gap-y-20 lg:gap-y-16 gap-x-8">
          <!-- Card -->
          <Card img="/comida.png" title="Speacy seasoned seafood noodles" price="$2.29" inventory="20" />
          <!-- Card -->
          <Card img="/dish.png" title="Salted Pasta with mushroom sauce" price="$2.69" inventory="20" />
          <!-- Card -->
          <Card img="/comida.png" title="Beef dumpling in hot and sour soups" price="$2.99" inventory="20" />
          <!-- Card -->
          <Card img="/dish.png" title="Healthy noodle with spinach leaf" price="$3.29" inventory="20" />
          <!-- Card -->
          <Card img="/comida.png" title="Hot spicy fried rice with omelet" price="$3.49" inventory="20" />
          <!-- Card -->
          <Card img="/dish.png" title="Spicy instant noodle with special omelette" price="$3.69" inventory="20" />
        </div>
      </div>
    </main>
  </div>
</template>
