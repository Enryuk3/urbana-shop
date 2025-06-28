<script lang="ts" setup>
defineProps<{ showMenu: boolean }>()
</script>

<template>
  <div class="bg-[#1F1D2B] fixed lg:left-0 top-0 w-[106px] h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 -left-full transition-all" :class="[showMenu ? 'left-0' : '-left-full']">
    <div>
      <div class="justify-self-center mb-4">
        <Logo />
      </div>
      <ul class="pl-3 space-y-3">
        <li class="bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl">
          <NuxtLink to="/" class="bg-primary p-4 inline-flex justify-center rounded-xl">
            <Icon name="iconly:home-outline" class="size-6 shrink-0 text-white" />
          </NuxtLink>
        </li>
        <li class="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <NuxtLink to="/" class="group-hover:bg-primary p-4 inline-flex justify-center rounded-xl text-primary">
            <Icon name="ri:discount-percent-line" class="size-6 shrink-0 text-primary group-hover:text-white" />
          </NuxtLink>
        </li>
        <li class="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <NuxtLink to="/" class="group-hover:bg-primary p-4 inline-flex justify-center rounded-xl text-primary">
            <Icon name="ri:pie-chart-line" class="size-6 shrink-0 text-primary group-hover:text-white" />
          </NuxtLink>
        </li>
        <li class="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <NuxtLink to="/" class="group-hover:bg-primary p-4 inline-flex justify-center rounded-xl text-primary">
            <Icon name="ri:mail-line" class="size-6 shrink-0 text-primary group-hover:text-white" />
          </NuxtLink>
        </li>
        <li class="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <NuxtLink to="/" class="group-hover:bg-primary p-4 inline-flex justify-center rounded-xl text-primary">
            <Icon name="ri:notification-3-line" class="size-6 shrink-0 text-primary group-hover:text-white" />
          </NuxtLink>
        </li>
        <li class="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <NuxtLink to="/" class="group-hover:bg-primary p-4 inline-flex justify-center rounded-xl text-primary">
            <Icon name="ri:settings-4-line" class="size-6 shrink-0 text-primary group-hover:text-white" />
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div>
      <ul class="pl-3">
        <li class="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <NuxtLink to="/" class="group-hover:bg-primary p-4 inline-flex justify-center rounded-xl text-primary">
            <Icon name="ri:logout-circle-line" class="size-6 shrink-0 text-primary group-hover:text-white" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
