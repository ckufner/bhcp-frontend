import type {UserDto} from "~/types/User.dto";
import type {UserCreateDto} from "~/types/UserCreate.dto";

export const userEditStore = defineStore('userEditStore', () => {
    const drawerShow = ref(true)
    const skillToAdd = ref('')
    const linkToAdd = ref('')
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
        linkToAdd
    }
})