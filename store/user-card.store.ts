import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserDto } from '~/types/User.dto'

export const useUserCardStore = defineStore('user-card-store', () => {
    const user = ref<UserDto[]>([])
    const userDetail = ref<UserDto | null>(null)
    const userSearchQuery = ref<string>('')
    const userFilter = ref<string[]>([])
    const loading = ref<boolean>(false)
    const count = ref<number>(6)
    const page = ref<number>(0)

    return {
        user,
        userDetail,
        userSearchQuery,
        userFilter,
        loading,
        count,
        page
    }
})