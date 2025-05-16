<script setup lang="ts">
import {useUserCardStore} from "~/store/user-card.store";

const userCardStore = useUserCardStore()
</script>

<template>
<div class="flex items-center justify-start w-full p-4 bg-gray-200 rounded my-16">
  <div class="flex flex-col lg:mb-8 mb-4 lg:w-1/2 w-3/4 basis-1/2">
    <label class="text-sm" for="name">Suche nach Name, Team oder Skills:</label>
    <input class="bg-white border border-text p-2 rounded" id="name" type="text" v-model="userCardStore.userSearchQuery" />
  </div>
  <button class="bg-primary p-2 flex items-center rounded ml-4 lg:-mt-2.5 mt-6">
    <Icon name="mdi:magnify" class="text-2xl text-white"/>
  </button>
</div>
</template>

<style scoped>

</style>