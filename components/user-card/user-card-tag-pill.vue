<script setup lang="ts">
defineProps<{
  skill: string
  clearable?: boolean
}>()
</script>

<template>

    <div class="rounded-full bg-primary text-white py-1 px-2">
      {{ skill }}
    </div>
    <div v-if="clearable">
      <Icon name="mdi:close" />
    </div>
</template>