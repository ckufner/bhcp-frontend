<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  name: string
  team: string
  imageUrl: string
}>()

const backUpUrl = 'https://www.pnrao.com/wp-content/uploads/2023/06/dummy-user-male.jpg'
const isImageLoading = ref(true)
</script>

<template>
  <div class="relative w-16 h-16 -mt-8">
    <img
      class="w-full h-full rounded-full border-[3px] border-white shadow-xl absolute top-0 left-0"
      :src="imageUrl"
      alt="test-user"
      @error="($event.target as HTMLImageElement).src = backUpUrl"
      @load="isImageLoading = false"
    />
    <Icon v-if="isImageLoading" class="leading-0 ml-4 mt-1 p-2" name="mdi:close-circle" />
  </div>
  <p class="text-primary font-bold text-2xl">{{name}}</p>
  <p class="text-primary">{{team}}</p>
</template>