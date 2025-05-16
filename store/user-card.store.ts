import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserDto } from '~/types/User.dto'

export const useUserCardStore = defineStore('user-card-store', () => {
    const user = ref([] as UserDto[])

    return {
        user
    }
})