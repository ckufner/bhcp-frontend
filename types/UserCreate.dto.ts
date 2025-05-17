import type {UserCreateTeamDto} from "~/types/UserCreateTeam.dto";

export interface UserCreateDto {
    imageUrl: string
    name: string
    team: UserCreateTeamDto,
    description: string
    skills: string[],
    socialLinks: string[]
    visible?: boolean
    email: string
}