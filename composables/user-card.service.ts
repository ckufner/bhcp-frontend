import { useRuntimeConfig } from '#imports'
import {useUserCardStore} from "~/store/user-card.store"
import type { UserDto } from '~/types/User.dto'


export function userCardService(){
    const userCardStore = useUserCardStore()
    const config = useRuntimeConfig()
    const apiBase = config.public.apiBase

    const initalLoadUsers = async () => {
        userCardStore.loading = true
        userCardStore.page = 0
        userCardStore.count = 6
        try {
            const queryParam = `?query=${encodeURIComponent(userCardStore.userSearchQuery || '')}&page=${userCardStore.page}&size=${userCardStore.count}`
            const response = await $fetch<{ data: UserDto[] }>(`${apiBase}/api/users/${queryParam}`)
            userCardStore.user = response.items
            userCardStore.lastPage = response.last
        } catch (error) {
            console.error('Failed to load initial users:', error)
        } finally {
            userCardStore.loading = false
        }
    }

    const loadScrollUsers = async () => {
        userCardStore.loading = true
        try {
            if(!userCardStore.lastPage){
                userCardStore.page++
                const queryParam = `?query=${encodeURIComponent(userCardStore.userSearchQuery || '')}&page=${userCardStore.page}&size=${userCardStore.count}`
                const response = await $fetch<{ data: UserDto[] }>(`${apiBase}/api/users/${queryParam}`)
                userCardStore.user.push(...response.items)
                userCardStore.lastPage = response.last
            } else {
                userCardStore.loading = false
            }
        } catch (error) {
            console.error('Failed to load scroll users:', error)
        } finally {
            userCardStore.loading = false
        }
    }

    const addFilter = async (filter: string) => {
        userCardStore.userFilter.push(filter)
        await initalLoadUsers()
    }

    async function removeFilter(index: number){
        console.log('in remove')
        userCardStore.userFilter.splice(index, 1)
        await initalLoadUsers()
    }

    const setDetailUser = (user: UserDto) => {
        userCardStore.userDetail = user
    }

    return {
        setDetailUser,
        initalLoadUsers,
        addFilter,
        removeFilter,
        loadScrollUsers
    }
}