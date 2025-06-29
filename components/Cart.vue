<script setup lang="ts">
defineProps<{ showOrder: boolean }>()
defineEmits(['toggleOrder'])
</script>

<template>
  <div class="lg:col-span-2 fixed z-50 top-0 bg-surface w-full lg:w-[409px] lg:right-0 h-full transition-all" :class="showOrder ? 'right-0' : '-right-full'">
    <!-- Orders -->
    <div class="relative pt-16 lg:pt-8 text-gray-300 p-6 h-full">
      <button
        class="flex items-center justify-center bg-background rounded-full p-3 lg:hidden absolute top-4 left-4" @click="$emit('toggleOrder')"
      >
        <Icon name="ri:close-line" />
      </button>
      <h2 class="text-xl my-4 lg:mt-0">
        Order #151516
      </h2>
      <!-- Pills -->
      <div class="flex items-center gap-2 flex-wrap mb-6 text-sm">
        <button class="bg-primary text-white py-2 px-4 rounded-xl">
          Dine In
        </button>
        <button class="text-primary py-2 px-4 rounded-xl border border-dark-line">
          To Go
        </button>
        <button class="text-primary py-2 px-4 rounded-xl border border-dark-line">
          Delivery
        </button>
      </div>
      <!-- Cart -->
      <div>
        <div class="grid grid-cols-6 gap-3 mb-4 border-b border-dark-line pb-2">
          <h5 class="col-span-4">
            Item
          </h5>
          <h5>Qty</h5>
          <h5>Price</h5>
        </div>
        <!-- Products -->
        <div class="h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">
          <!-- Product -->
          <div v-for="(product, index) in 4" :key="index" class="mb-6">
            <div class="grid grid-cols-6 mb-2.5 gap-3">
              <!-- Product description -->
              <div class="col-span-4 flex items-center gap-2">
                <img src="/comida.png" alt="" class="size-10 object-cover">
                <div>
                  <h5 class="text-sm">
                    Spaicy seaso...
                  </h5>
                  <p class="text-xs text-gray-500">
                    $2.29
                  </p>
                </div>
              </div>
              <!-- Quantity -->
              <div class="flex items-center gap-2 justify-center size-12 bg-form p-3 border border-dark-line rounded-lg">
                <span>2</span>
              </div>
              <!-- Price -->
              <div class="col-span-1 flex items-center justify-center">
                <span>$4.58</span>
              </div>
            </div>
            <!-- Note -->
            <div class="grid grid-cols-6 items-center gap-3">
              <form class="col-span-5">
                <input
                  name="note"
                  type="text"
                  class="w-full bg-form p-3 rounded-lg outline-hidden border border-dark-line focus:border-primary text-sm text-lighter"
                  placeholder="Order Note..."
                >
              </form>
              <div class="col-span-1">
                <button class="border border-primary p-3 rounded-lg flex justify-center text-primary hover:bg-primary/10 transition-colors">
                  <Icon name="ri:delete-bin-6-line" class="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Submit payment -->
      <div class="bg-surface absolute w-full bottom-0 left-0 p-6 border-t border-dark-line">
        <div class="flex items-center justify-between mb-4">
          <span class="text-light">Discount</span>
          <span>$0.00</span>
        </div>
        <div class="flex items-center justify-between mb-6">
          <span class="text-light">Subtotal</span>
          <span>$4.58</span>
        </div>
        <div>
          <button class="bg-primary text-white text-sm font-semibold w-full p-2.5 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all">
            Continue to payment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
