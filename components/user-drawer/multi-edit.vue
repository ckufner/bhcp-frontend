<script setup lang="ts">
import {userEditStore} from "~/store/user-edit.store";
defineProps<{
  type: 'skill' | 'link'
}>()
const userStore = userEditStore()
const editService = useUserEditService()

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
<div class="flex flex-col mb-4">
  <div class="relative flex flex-col">
    <label class="text-sm" for="name">{{type === 'skill' ? 'Skills:' : 'Links:'}}</label>
    <input v-if="type === 'skill'" class="bg-white border border-text p-2 rounded" id="name" type="text" v-model="userStore.skillToAdd" @keyup.enter.stop="editService.addToList(type)"/>
    <input v-else class="bg-white border border-text p-2 rounded" id="name" type="text" v-model="userStore.linkToAdd" @keyup.enter.stop="editService.addToList(type)" />
    <button @click="editService.addToList(type)" :title="type === 'skill' ? 'Skill hinzufügen' : 'Link hinzufügen'" class="bg-gray-200 w-[39px] h-[39px] absolute rounded right-[1px] bottom-[1px]">
      <Icon name="mdi:plus-circle" />
    </button>
  </div>
  <div class="flex flex-wrap justify-start gap-2 mt-2" v-if="type === 'skill'">
    <UserCardTagPill v-for="(data, index) in userStore.userData.skills" :skill="data" :key="index" clearable @remove-skill="editService.removeFromList('skill', index)" />
  </div>
  <div class="flex flex-wrap justify-start gap-2 mt-2" v-else>
    <UserCardTagPill v-for="(data, index) in userStore.userData.social" :skill="getPlatformName(data)" :key="index" clearable @remove-skill="editService.removeFromList('link', index)"/>
  </div>
</div>
</template>

<style scoped>

</style>