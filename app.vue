<script setup lang="ts">
import HeaderBar from "~/components/header/header-bar.vue"
import UserDrawer from "~/components/user-drawer/user-drawer.vue"
import UserCard from "~/components/user-card/user-card.vue"
import ApplicationBg from "~/components/other/application-bg.vue"
import {userCardService} from "~/composables/user-card.service"

const useUserCardService = userCardService()

const handleScroll = async () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight + 50 >= fullHeight) {
    await useUserCardService.loadScrollUsers()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})

onMounted(() => {
  useUserCardService.initalLoadUsers()
})
</script>
<template>
  <div class="font-inter p-8 relative">
    <HeaderBar />
    <SearchBar />
    <UserDrawer />
    <UserCard />
    <ApplicationBg />
  </div>
</template>
