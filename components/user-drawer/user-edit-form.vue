<script setup lang="ts">
import {userEditStore} from "~/store/user-edit.store";
import {useUserEditService} from "~/composables/user-edit.service";

const userStore = userEditStore()
const userEditService = useUserEditService()
</script>

<template>
<div class="lg:p-8 p-4 lg:pt-24 pt-16 m-4 bg-white rounded-4xl mt-16 relative" >
  <div v-if="userStore.userData.imageUrl !== '' && userStore.userData.imageUrl !== null" class="lg:w-32 lg:h-32 w-16 h-16 rounded-full overflow-hidden absolute left-1/2 -top-8 translate-x-[-50%] border-[4px] border-white shadow-xl">
    <img class="w-full h-full object-cover" :src="userStore.userData.imageUrl" alt="user avatar" />"
  </div>
  <div v-else class="lg:w-32 lg:h-32 w-16 h-16 rounded-full overflow-hidden absolute left-1/2 -top-8 translate-x-[-50%] border-[4px] border-white shadow-xl">
    <img class="w-full" src="~/assets/img/avatar.svg" alt="user avatar" />"
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
  <UserDrawerMultiEdit type="skill" />
  <UserDrawerMultiEdit type="link" />
  <div class="flex flex-row items-center justify-between">
    <button class="cursor-pointer  py-2 px-8 rounded hover:bg-primary-dark-hover hover:border-primary-darker-hover bg-primary-dark text-white border-b-[4px] border-b-primary-darker border-solid" @click="userStore.drawerShow = false">Abbrechen</button>
    <button :disabled="JSON.stringify(userStore.userData) === userStore.userDataString" @click="userEditService.editUser()" class="disabled:cursor-not-allowed cursor-pointer hover:bg-primary-hover hover:border-primary-dark-hover py-2 px-8 rounded bg-primary text-white border-b-[4px] border-b-primary-dark border-solid">Speichern</button>
  </div>
</div>
</template>

<style scoped>

</style>