import {userEditStore} from "~/store/user-edit.store";
import type {UserDto} from "~/types/User.dto";
import { useRuntimeConfig } from '#imports';

export function useUserEditService() {
    const editStore = userEditStore()
    const config = useRuntimeConfig()
    const apiBase = config.public.apiBase

    const loadUser = async () => {
        try {
            const userId = editStore.editData.id;
            if (!userId) {
                console.warn('No user ID provided to loadUser')
                return
            }
            const user = await $fetch<UserDto>(`${apiBase}/api/user/${userId}`)
            editStore.editData = user
            console.log('User loaded:', user)
        } catch (error) {
            console.error('Failed to load user:', error)
        }
    }

    const editUser = async () => {
        try {
            const response = await $fetch<UserDto>(`${apiBase}/api/user/${editStore.editData.id}`, {
                method: 'PUT',
                body: editStore.userData,
            })
            console.log('User updated:', response)
        } catch (error) {
            console.error('Failed to update user:', error)
        }
    }

    const createUser = async () => {
        try {
            const response = await $fetch<UserDto>(`${apiBase}/api/user`, {
                method: 'POST',
                body: editStore.userData,
            })
            console.log('User created:', response)
        } catch (error) {
            console.error('Failed to create user:', error)
        }
    }

    const addToList = (type: 'skill' | 'link') => {
        if (type === 'skill' && editStore.skillToAdd !== '') {
            editStore.userData.skills.push(editStore.skillToAdd)
            editStore.skillToAdd = ''
        }
        if (type === 'link' && editStore.linkToAdd !== '') {
            editStore.userData.social.push(editStore.linkToAdd)
            editStore.linkToAdd = ''
        }
    }

    const removeFromList = (type: 'skill' | 'link', index: number) => {
        if (type === 'skill' && index > -1) {
            editStore.userData.skills.splice(index, 1)
        }
        if (type === 'link' && index > -1) {
            editStore.userData.social.splice(index, 1)
        }
    }

    return {
        addToList,
        removeFromList,
        editUser,
        createUser,
        loadUser
    }
}