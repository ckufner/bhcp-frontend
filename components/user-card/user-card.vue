<script setup lang="ts">
import { onMounted } from 'vue'
import UserCardHeader from '~/components/user-card/user-card-header.vue'
import { useUserCardStore } from '~/store/user-card.store'
import { userCardService } from '~/composables/user-card.service'
import UserCardDetail from "~/components/user-card/user-card-detail.vue";

const userCardStore = useUserCardStore()
const useUserCardService = userCardService()

const el = useTemplateRef<HTMLElement>('el')
const { reset } = useInfiniteScroll(
    el,
    () => {
      // load more
    },
    {
      distance: 10,
      canLoadMore: () => {
        // inidicate when there is no more content to load so onLoadMore stops triggering
        // if (noMoreContent) return false
        return true // for demo purposes
      }
    }
)

onMounted(() => {
  useUserCardService.getAllUsers()
})
</script>

<template>
  <div ref="el" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="(user, index) in userCardStore.user" :key="index">
      <div
          @click="useUserCardService.setDetailUser(user)"
          class="mt-12 cursor-pointer rounded-3xl shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.2),0_10px_15px_-3px_rgba(0,0,0,0.2)] hover:shadow-[0_-12px_18px_-3px_rgba(0,0,0,0.25),0_12px_18px_-3px_rgba(0,0,0,0.25)] transition-shadow duration-200 my-3 mx-3 h-[320px] bg-main-white"
      >
        <div class="flex items-center justify-between flex-col h-full">
          <div class="flex items-center flex-col h-full">
            <user-card-header :name="user.name" :team="user.team.name"/>
            <user-card-description :description="user.description"/>
            <div class="flex justify-center gap-2 flex-wrap">
              <template v-for="(skill, index) in user.skills.slice(0, 5)" :key="index">
                <user-card-tag-pill :skill="skill" />
              </template>
              <span v-if="user.skills.length > 5" class="text-gray-500 text-sm mt-1">...</span>
            </div>
          </div>
          <user-card-links :socials="user.social"/>
        </div>
      </div>
    </div>
  </div>
  <user-card-detail/>
</template>
