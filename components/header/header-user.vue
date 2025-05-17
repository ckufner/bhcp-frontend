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
  <div v-if="editUser.userData.imageUrl !== '' && editUser.userData.imageUrl !== null" class="lg:w-16 lg:h-16 w-8 h-8 rounded-full border-[3px] border-white shadow-xl">
    <img class="w-full h-full object-cover" :src="editUser.userData.imageUrl" alt="user avatar" />"
  </div>
  <div v-else class="rounded-full shadow-lg lg:w-16 lg:h-16 w-8 h-8 border-[3px] border-white">
    <img src="~/assets/img/avatar.svg" alt="user avatar" />
  </div>
  <span class="font-bold ml-4">{{editUser.userData.name}}</span>
  <Icon class="ml-4" name="mdi:chevron-right" />
</button>
</template>