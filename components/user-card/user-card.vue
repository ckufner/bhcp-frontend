<script setup lang="ts">
import { onMounted } from 'vue'
import UserCardHeader from '~/components/user-card/user-card-header.vue'
import { useUserCardStore } from '~/store/user-card.store'
import { userCardService } from '~/composables/user-card.service'

const userCardStore = useUserCardStore()
const useUserCardService = userCardService()

onMounted(() => {
  useUserCardService.getAllUsers()
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="(user, index) in userCardStore.user" :key="index">
      <div @click="" class="mt-12 cursor-pointer rounded-3xl shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.2),0_10px_15px_-3px_rgba(0,0,0,0.2)] my-3 mx-3 h-[300px] bg-main-white">
        <div class="flex items-center justify-between flex-col h-full">
          <div class="flex items-center flex-col h-full">
            <user-card-header :name="user.name" :team="user.team.name"/>
            <user-card-description :description="user.description"/>
            <user-card-tag-pill :skills="user.skills"/>
          </div>
          <user-card-links :socials="user.social"/>
        </div>
      </div>
    </div>
  </div>
</template>
