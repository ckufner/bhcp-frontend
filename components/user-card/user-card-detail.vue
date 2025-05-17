<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useUserCardStore } from '~/store/user-card.store'
import UserCardHeader from '~/components/user-card/user-card-header.vue'
import UserCardDescription from '~/components/user-card/user-card-description.vue'
import UserCardTagPill from '~/components/user-card/user-card-tag-pill.vue'
import UserCardLinks from '~/components/user-card/user-card-links.vue'

const userCardStore = useUserCardStore()

const close = () => {
  userCardStore.userDetail = null
}

const modalRef = ref<HTMLElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  if (modalRef.value && !modalRef.value.contains(event.target as Node)) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<template>
  <div
      v-if="userCardStore.userDetail"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
  >
    <div
        ref="modalRef"
        class="relative bg-main-white rounded-3xl shadow-lg p-6 w-full max-w-3xl transform"
    >
      <button
          @click="close"
          class="absolute top-4 cursor-pointer right-4 text-gray-500 hover:text-gray-700 text-2xl"
      >
        &times;
      </button>

      <div class="flex flex-col items-center justify-center">
        <UserCardHeader
            :name="userCardStore.userDetail.name"
            :team="userCardStore.userDetail.team.name"
            :image-url="userCardStore.userDetail.imageUrl"
        />
        <UserCardDescription :description="userCardStore.userDetail.description" />
        <div class="flex flex-wrap justify-center gap-2 my-4">
          <UserCardTagPill
              v-for="(skill, index) in userCardStore.userDetail.skills"
              :key="index"
              :skill="skill"
          />
        </div>
        <UserCardLinks :socials="userCardStore.userDetail.socialLinks" />
      </div>
    </div>
  </div>
</template>