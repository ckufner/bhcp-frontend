<script setup lang="ts">
defineProps<{
  name: string
  team: string
}>()
</script>

<template>
  <img class="-mt-8 w-16 h-16 rounded-full border-[3px] border-white shadow-xl" src="https://www.pnrao.com/wp-content/uploads/2023/06/dummy-user-male.jpg" alt="test-user" />
  <p class="text-primary font-bold text-2xl">{{name}}</p>
  <p class="text-primary">{{team}}</p>
</template>