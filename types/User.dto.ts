import type {UserCreateDto} from "~/types/UserCreate.dto";

export interface UserDto extends UserCreateDto {
    id: string
}