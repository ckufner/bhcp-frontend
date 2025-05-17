<script setup lang="ts">
import { ref } from 'vue'
import {userCardService} from "~/composables/user-card.service";

defineProps<{
  name: string
  team: string
  imageUrl: string
}>()

const useUserCardService = userCardService()

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = new URL('~/assets/img/avatar.svg', import.meta.url).href
}

const isImageLoading = ref(true)

const onImageLoad = () => {
  setTimeout(() => {
    isImageLoading.value = false
  }, 100)
}
</script>

<template>
  <div class="relative w-16 h-16 -mt-8">
    <img
      class="w-full h-full rounded-full border-[3px] border-white shadow-xl absolute top-0 left-0"
      :src="imageUrl === null? handleImageError : imageUrl"
      alt="test-user"
      @error="handleImageError"
      @load="onImageLoad"
    />
    <Icon v-if="isImageLoading" class="w-full h-full text-6xl ml-0.5 mt-0.5 rounded-full spinner top-0 left-0 absolute" name="mdi:loading" />
  </div>
  <p class="text-primary font-bold text-2xl">{{name}}</p>
  <p
      @click="useUserCardService.addFilter(team)"
      @keyup.enter="useUserCardService.addFilter(team)"
      tabindex="0" class="focus:underline hover:underline text-primary">{{team}}</p>
</template>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: spin 1s linear infinite;
}
</style>