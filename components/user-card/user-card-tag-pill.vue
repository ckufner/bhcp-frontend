<script setup lang="ts">
defineProps<{
  skills: string[]
}>()
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2">
    <div v-for="(skill, index) in skills" :key="index" class="rounded-full bg-primary text-white py-1 px-2">
      {{ skill }}
    </div>
  </div>
</template>