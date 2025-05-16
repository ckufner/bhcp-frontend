<script setup lang="ts">
defineProps<{
  skill: string
  clearable?: boolean
}>()
defineEmits<{
  (e: 'removeSkill'): void
}>()
const userEdit = useUserEditService()
</script>

<template>

    <div class="rounded-full bg-primary text-white py-1 px-2 flex items-center justify-center">
      <div>{{ skill }}</div>
      <button v-if="clearable" class="p-1" @click="$emit('removeSkill')">
        <Icon class="leading-0 ml-4 mt-1 p-2" name="mdi:close-circle" />
      </button>
    </div>

</template>