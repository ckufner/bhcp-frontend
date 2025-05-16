<script setup lang="ts">
import {userEditStore} from "~/store/user-edit.store";
defineProps<{
  type: 'skills' | 'link'
}>()
const userStore = userEditStore()
</script>

<template>
<div class="flex flex-col">
  <div class="relative flex flex-col lg:mb-8 mb-4">
    <label class="text-sm" for="name">{{type === 'skills' ? 'Skills:' : 'Links:'}}</label>
    <input v-if="type === 'skills'" class="bg-white border border-text p-2 rounded" id="name" type="text" v-model="userStore.skillToAdd" />
    <input v-else class="bg-white border border-text p-2 rounded" id="name" type="text" v-model="userStore.skillToAdd" />
    <button :title="type === 'skills' ? 'Skill hinzufügen' : 'Link hinzufügen'" class="bg-gray-200 w-[39px] h-[39px] absolute rounded right-[1px] bottom-[1px]">
      <Icon name="mdi:plus-circle" />
    </button>
  </div>
  <div class="flex" v-if="type === 'skills'">
    <UserCardTagPill v-for="(data, index) in userStore.userData.skills" :skill="data" :key="index" />
  </div>
  <div class="flex" v-else>
    <UserCardTagPill v-for="(data, index) in userStore.userData.social" :skill="data" :key="index" />
  </div>
</div>
</template>

<style scoped>

</style>