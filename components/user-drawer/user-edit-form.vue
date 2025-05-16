<script setup lang="ts">
import {userEditStore} from "~/store/user-edit.store";

const userStore = userEditStore()
</script>

<template>
<div class="lg:p-8 p-4 lg:pt-24 pt-16 m-4 bg-white rounded-4xl mt-16 relative" >
  <div v-if="userStore.userData.imageUrl !== ''" class="lg:w-32 lg:h-32 w-16 h-16 rounded-full overflow-hidden absolute left-1/2 -top-8 translate-x-[-50%] border-[4px] border-white shadow-xl">
    <img  :src="userStore.userData.imageUrl" alt="user avatar" />"
  </div>
  <div class="flex flex-col lg:mb-8 mb-4">
    <label class="text-sm" for="name">Avatar Bild Url:</label>
    <input class="bg-white border border-text p-2 rounded" id="name" type="text" v-model="userStore.userData.imageUrl" />
  </div>
  <div class="flex flex-col lg:mb-8 mb-4">
    <label class="text-sm" for="name">Name:</label>
    <input class="bg-white border border-text p-2 rounded" id="name" type="text" v-model="userStore.userData.name" />
  </div>
  <div class="flex flex-col lg:mb-8 mb-4">
    <label class="text-sm" for="name">Team:</label>
    <input class="bg-white border border-text p-2 rounded" id="name" type="text" v-model="userStore.userData.team.name" />
  </div>
  <div class="flex flex-col lg:mb-8 mb-4">
    <label class="text-sm" for="name">Stelle dich vor:</label>
    <textarea rows="4" class="bg-white border border-text p-2 rounded" id="name" type="text" v-model="userStore.userData.description" />
    <div class="flex items-end justify-end">
      <span class="block mt-2">{{userStore.userData.description.length}} / 255</span>
    </div>
  </div>
  <UserDrawerMultiEdit type="skills" />
  <UserDrawerMultiEdit type="link" />
  <div class="flex flex-row items-center justify-between">
    <button class="py-2 px-8 rounded bg-primary-dark text-white" @click="userStore.drawerShow = false">Abbrechen</button>
    <button class="py-2 px-8 rounded bg-primary text-white">Speichern</button>
  </div>
</div>
</template>

<style scoped>

</style>