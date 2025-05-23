<script setup lang="ts">
import UserCardHeader from '~/components/user-card/user-card-header.vue'
import { useUserCardStore } from '~/store/user-card.store'
import { userCardService } from '~/composables/user-card.service'
import UserCardDetail from "~/components/user-card/user-card-detail.vue"

const userCardStore = useUserCardStore()
const useUserCardService = userCardService()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
    <div v-for="(user, index) in userCardStore.user" :key="index">
      <div
          tabindex="0"
          @click="useUserCardService.setDetailUser(user)"
          @keyup.enter="useUserCardService.setDetailUser(user)"
          class="cursor-pointer rounded-3xl shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.2),0_10px_15px_-3px_rgba(0,0,0,0.2)] focus:shadow-[0_-12px_18px_-3px_rgba(0,0,0,0.25),0_12px_18px_-3px_rgba(0,0,0,0.25)] hover:shadow-[0_-12px_18px_-3px_rgba(0,0,0,0.25),0_12px_18px_-3px_rgba(0,0,0,0.25)] transition-shadow duration-200 my-3 mx-3 h-[320px] bg-main-white"
      >
        <div class="flex items-center justify-between flex-col h-full">
          <div class="flex items-center flex-col h-full">
            <user-card-header :name="user.name" :team="user.team.name" :imageUrl="user.imageUrl"/>
            <user-card-description :description="user.description"/>
            <div class="flex justify-center gap-2 flex-wrap">
              <template v-for="(skill, index) in user.skills.slice(0, 5)" :key="index">
                <user-card-tag-pill :skill="skill" />
              </template>
              <span v-if="user.skills.length > 5" class="text-gray-500 text-sm mt-1">...</span>
            </div>
          </div>
          <user-card-links :socials="user.socialLinks"/>
        </div>
      </div>
    </div>
  </div>
  <user-card-detail class="max-md:hidden"/>
  <div v-if="userCardStore.loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
    <div v-for="(i, index) in 3" :key="index">
      <div
          tabindex="0"
          class="shimmer rounded-3xl shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.2),0_10px_15px_-3px_rgba(0,0,0,0.2)] focus:shadow-[0_-12px_18px_-3px_rgba(0,0,0,0.25),0_12px_18px_-3px_rgba(0,0,0,0.25)] hover:shadow-[0_-12px_18px_-3px_rgba(0,0,0,0.25),0_12px_18px_-3px_rgba(0,0,0,0.25)] transition-shadow duration-200 my-3 mx-3 h-[320px] bg-main-white"
      />
    </div>
  </div>
</template>

<style scoped lang="css">
@keyframes shimmer {
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
}

.shimmer {
  position: relative;
  overflow: hidden;
  background: #f6f7f8;
  background-image: linear-gradient(
      90deg,
      #f6f7f8 0px,
      #eaeaea 40px,
      #f6f7f8 80px
  );
  background-repeat: no-repeat;
  background-size: 400px 100%;
  animation: shimmer 1.5s infinite linear;
}
</style>
