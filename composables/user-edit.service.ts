import {userEditStore} from "~/store/user-edit.store";

export function useUserEditService() {
    const editStore = userEditStore()

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
        removeFromList
    }
}