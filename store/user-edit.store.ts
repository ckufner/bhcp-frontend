import type {UserDto} from "~/types/User.dto";
import type {UserCreateDto} from "~/types/UserCreate.dto";

export const userEditStore = defineStore('userEditStore', () => {
    const drawerShow = ref(false)
    const skillToAdd = ref('')
    const linkToAdd = ref('')
    const editData = reactive<UserDto>({
        id: '1',
        imageUrl: '',
        name: '',
        team: {
            name: ''
        },
        description: '',
        skills: [],
        social: []
    })
    const userData = reactive<UserCreateDto>({
        imageUrl: '',
        name: '',
        team: {
            name: ''
        },
        description: '',
        skills: [],
        social: []
    })

    return {
        drawerShow,
        userData,
        skillToAdd,
        linkToAdd,
        editData
    }
})