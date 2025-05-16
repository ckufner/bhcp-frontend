<script setup lang="ts">
defineProps<{
  users: string[]
}>()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="(i, index) in 5" :key="index">
      <div class="mt-12 rounded-3xl shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.2),0_10px_15px_-3px_rgba(0,0,0,0.2)] my-3 mx-3 h-[300px] bg-main-white">
        <div class="flex items-center flex-col">
          <img class="-mt-6 w-16 h-16 rounded-full border-[3px] border-white shadow-xl" src="https://www.pnrao.com/wp-content/uploads/2023/06/dummy-user-male.jpg" alt="test-user" />
          <p class="text-primary font-bold text-2xl">John Doe</p>
          <p class="text-primary text-2xl">John Doe</p>
        </div>
      </div>
    </div>
  </div>
</template>
