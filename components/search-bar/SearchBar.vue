<script setup lang="ts">
import { watch } from 'vue'
import { useUserCardStore } from "~/store/user-card.store"
import { userCardService } from '~/composables/user-card.service'

const userCardStore = useUserCardStore()
const { initalLoadUsers } = userCardService()

watch(() => userCardStore.userSearchQuery, (newVal) => {
  if (newVal === '') {
    initalLoadUsers()
  }
})
</script>

<template>
<div class="w-full p-4 bg-gray-200 rounded my-16">
  <label class="text-sm" for="name">Suche nach Name, Team oder Skills:</label>
  <div class="flex gap-4 mt-3">
    <input class="bg-white border border-text p-2 rounded w-3/5 max-md:w-full" id="name" type="text" v-model="userCardStore.userSearchQuery" @keyup.enter="() => {
      if(userCardStore.userSearchQuery !== ''){
      initalLoadUsers()
      }
    }" />
    <button @click="initalLoadUsers()" :disabled="userCardStore.userSearchQuery === ''" class="disabled:cursor-not-allowed bg-primary p-2 flex items-center rounded cursor-pointer hover:bg-primary-hover hover:border-b-primary-dark-hover border-primary-dark border-b-[4px] border-solid">
      <Icon name="mdi:magnify" class="text-2xl text-white"/>
    </button>
  </div>
</div>
</template>