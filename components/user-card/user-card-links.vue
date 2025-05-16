<script setup lang="ts">
defineProps<{
  socials: string[]
}>()

function getPlatformName(url: string): string {
  try {
    const parsedUrl = new URL(url)
    const hostname = parsedUrl.hostname.replace(/^www\./, '')
    const domainParts = hostname.split('.')
    return domainParts[0].charAt(0).toUpperCase() + domainParts[0].slice(1)
  } catch (error) {
    console.error('Ungültige URL:', url)
    return url
  }
}
</script>

<template>
  <div class="flex justify-center items-center gap-2 mt-3 mb-1">
    <template v-for="(social, index) in socials" :key="index">
      <a
          :href="social"
          target="_blank"
          class="text-primary text-xs underline focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {{ getPlatformName(social) }}
      </a>
      <div v-if="index < socials.length - 1" class="text-primary text-xs">|</div>
    </template>
  </div>
</template>