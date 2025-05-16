import type {UserDto} from "~/types/User.dto";
import type {UserCreateDto} from "~/types/UserCreate.dto";

export const userEditStore = defineStore('userEditStore', () => {
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
})