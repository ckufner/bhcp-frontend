<script setup lang="ts">
import {userEditStore} from "~/store/user-edit.store";

const editUser = userEditStore()
const editService = useUserEditService()

onMounted(() => {
  editService.loadUser()
})
</script>

<template>
  <button @click="editUser.drawerShow = true" class="cursor-pointer flex items-center ml-auto focus:outline-[2px] focus:outline-primary focus:bg-light-grey">
    <div v-if="editUser.userData.imageUrl !== '' && editUser.userData.imageUrl !== null" class="shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.2),0_10px_15px_-3px_rgba(0,0,0,0.2)] focus:shadow-[0_-12px_18px_-3px_rgba(0,0,0,0.25),0_12px_18px_-3px_rgba(0,0,0,0.25)] hover:shadow-[0_-12px_18px_-3px_rgba(0,0,0,0.25),0_12px_18px_-3px_rgba(0,0,0,0.25)] transition-shadow duration-200 lg:w-16 lg:h-16 w-8 h-8 rounded-full border-[3px] border-white shadow-xl overflow-hidden">
      <img class="w-full h-full object-cover" :src="editUser.userData.imageUrl" alt="user avatar" />
    </div>
    <div v-else class="shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.2),0_10px_15px_-3px_rgba(0,0,0,0.2)] focus:shadow-[0_-12px_18px_-3px_rgba(0,0,0,0.25),0_12px_18px_-3px_rgba(0,0,0,0.25)] hover:shadow-[0_-12px_18px_-3px_rgba(0,0,0,0.25),0_12px_18px_-3px_rgba(0,0,0,0.25)] transition-shadow duration-200 rounded-full shadow-2xl lg:w-16 lg:h-16 w-8 h-8 border-[3px] border-white overflow-hidden">
      <img src="~/assets/img/avatar.svg" alt="user avatar" />
    </div>
    <span class="font-bold ml-4">{{editUser.userData.name}}</span>
    <Icon class="ml-4" name="mdi:chevron-right" />
  </button>
</template>