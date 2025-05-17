<script setup lang="ts">
defineProps<{
  description: string
}>()
</script>

<template>
  <div class="my-6 mx-3 text-gray-500 text-sm text-center">
    {{description}}
  </div>
</template>