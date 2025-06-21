<script lang="ts" setup>
defineProps<{ showMenu: boolean }>()
</script>

<template>
  <div class="bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 -left-full transition-all" :class="[showMenu ? 'left-0' : '-left-full']">
    <div>
      <h1 class="text-2xl text-gray-300 uppercase font-bold text-center my-5">
        Logo
      </h1>
      <ul class="pl-4">
        <li class="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
          <NuxtLink to="/" class="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white">
            <Icon name="ri:home-6-line" class="text-white" />
          </NuxtLink>
        </li>
        <li class="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
          <NuxtLink to="/" class="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white">
            <Icon name="ri:percent-line" class="text-white" />
          </NuxtLink>
        </li>
        <li class="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
          <NuxtLink to="/" class="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white">
            <Icon name="ri:pie-chart-line" class="text-white" />
          </NuxtLink>
        </li>
        <li class="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
          <NuxtLink to="/" class="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white">
            <Icon name="ri:mail-line" class="text-white" />
          </NuxtLink>
        </li>
        <li class="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
          <NuxtLink to="/" class="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white">
            <Icon name="ri:notification-3-line" class="text-white" />
          </NuxtLink>
        </li>
        <li class="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
          <NuxtLink to="/" class="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white">
            <Icon name="ri:settings-4-line" class="text-white" />
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div>
      <ul class="pl-4">
        <li class="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
          <NuxtLink to="/" class="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white">
            <Icon name="ri:logout-circle-line" class="text-white" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
