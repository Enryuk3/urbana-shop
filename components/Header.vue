<script setup>
</script>

<template>
  <header>
    <!-- Title and search -->
    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
      <div>
        <h1 class="text-[28px] text-white font-semibold font-barlow">
          Jaegar Resto
        </h1>
        <p class="text-lighter font-barlow">
          Wednesday, 2 Feb 2025
        </p>
      </div>
      <form>
        <div class="w-full relative md:w-[220px]">
          <Icon name="ri:search-2-line" class="h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
          <input type="text" class="text-sm bg-form text-li w-full py-[14px] pl-[42px] pr-[14px] rounded-lg text-gray-300 placeholder:text-light focus:outline-hidden" placeholder="Search for food, coffe, etc..">
        </div>
      </form>
    </div>
    <!-- Tabs -->
    <nav class="text-gray-300 flex items-center justify-between md:justify-start lg:gap-7 border-b border-gray-700 font-semibold mb-6">
      <a href="#" class="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-primary before:left-0 before:rounded-full before:-bottom-[1px] before:z-1 text-primary">Hot dishes</a>
      <a href="#" class="py-2 pr-4">Cold dishes</a>
      <a href="#" class="py-2 pr-4">Soup</a>
      <a href="#" class="py-2">Gril</a>
    </nav>
  </header>
</template>
