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
        //userCardStore.userFilter.push(filter)
        //await initalLoadUsers()
    }


    const getAllUsers = () => {
        userCardStore.user = [
            {
                id: "1",
                imageUrl: "https://example.com/images/alice.jpg",
                name: "Alice Johnson",
                team: { name: "Development" },
                description: "Alice is a seasoned frontend developer with a passion for creating intuitive user interfaces. She has over 5 years of experience in building responsive web applications.",
                skills: ["JavaScript", "Vue.js", "CSS", "HTML"],
                socialLinks: ["https://twitter.com/alicejohnson", "https://github.com/alicejohnson"]
            },
            {
                id: "2",
                imageUrl: "https://example.com/images/bob.jpg",
                name: "Bob Smith",
                team: { name: "Marketing" },
                description: "Bob is a creative marketing specialist who excels in digital campaigns and brand strategy. He has a knack for connecting with audiences and driving engagement.",
                skills: ["SEO", "Content Marketing", "Social Media"],
                socialLinks: ["https://linkedin.com/in/bobsmith", "https://twitter.com/bobsmith"]
            },
            {
                id: "3",
                imageUrl: "https://example.com/images/carol.jpg",
                name: "Carol Williams",
                team: { name: "Design" },
                description: "Carol is a talented UI/UX designer with a keen eye for detail. She specializes in creating user-centered designs that enhance user experience and satisfaction.",
                skills: ["Figma", "Sketch", "Adobe XD"],
                socialLinks: ["https://dribbble.com/carolwilliams", "https://behance.net/carolwilliams"]
            },
            {
                id: "4",
                imageUrl: "https://example.com/images/david.jpg",
                name: "David Lee",
                team: { name: "Engineering" },
                description: "David is a backend engineer with expertise in building scalable server-side applications. He is proficient in various programming languages and database systems.",
                skills: ["Node.js", "Python", "SQL", "MongoDB"],
                socialLinks: ["https://github.com/davidlee", "https://linkedin.com/in/davidlee"]
            },
            {
                id: "5",
                imageUrl: "https://example.com/images/eva.jpg",
                name: "Eva Martinez",
                team: { name: "Product" },
                description: "Eva is a product manager who bridges the gap between technical teams and customer needs. She has a strong background in agile methodologies and product lifecycle management.",
                skills: ["Agile", "Scrum", "Product Roadmapping", "Beer", "Threeshakeing", "Drinking"],
                socialLinks: ["https://twitter.com/evamartinez", "https://linkedin.com/in/evamartinez"]
            },
            {
                id: "6",
                imageUrl: "https://example.com/images/frank.jpg",
                name: "Frank Turner",
                team: { name: "Operations" },
                description: "Frank ensures that day-to-day operations run smoothly and efficiently. He is skilled in logistics, process optimization, and resource management.",
                skills: ["Logistics", "Operations Management", "Excel", "Strategy"],
                socialLinks: ["https://linkedin.com/in/frankturner"]
            }
        ]
    }

    const loadMoreData = async () => {
        userCardStore.loading = true
        const moreUsers = [
            {
                id: "7",
                imageUrl: "https://example.com/images/george.jpg",
                name: "George Black",
                team: { name: "Support" },
                description: "George is a tech support specialist who helps users resolve issues quickly and effectively. He’s known for his patience and deep knowledge of systems.",
                skills: ["Customer Support", "Troubleshooting", "CRM"],
                social: ["https://twitter.com/georgeblack"]
            },
            {
                id: "8",
                imageUrl: "https://example.com/images/hannah.jpg",
                name: "Hannah Scott",
                team: { name: "Finance" },
                description: "Hannah is a financial analyst with a strong grasp of budgeting and forecasting. She plays a key role in strategic financial planning.",
                skills: ["Budgeting", "Forecasting", "Excel", "Finance"],
                social: ["https://linkedin.com/in/hannahscott"]
            },
            {
                id: "9",
                imageUrl: "https://example.com/images/ian.jpg",
                name: "Ian Grey",
                team: { name: "Legal" },
                description: "Ian ensures compliance and manages legal risk for the company. He’s detail-oriented and knowledgeable about corporate law.",
                skills: ["Corporate Law", "Contracts", "Compliance"],
                social: ["https://linkedin.com/in/iangrey"]
            },
            {
                id: "10",
                imageUrl: "https://example.com/images/julia.jpg",
                name: "Julia King",
                team: { name: "HR" },
                description: "Julia leads the HR team, focusing on employee engagement, hiring, and company culture. She’s passionate about people and performance.",
                skills: ["Recruitment", "HR Management", "Onboarding"],
                social: ["https://twitter.com/juliaking"]
            },
            {
                id: "11",
                imageUrl: "https://example.com/images/kevin.jpg",
                name: "Kevin Hall",
                team: { name: "IT" },
                description: "Kevin is an IT administrator maintaining company infrastructure and security. He ensures everything stays up and running 24/7.",
                skills: ["Networking", "Cybersecurity", "IT Support"],
                social: ["https://github.com/kevinhall"]
            },
            {
                id: "12",
                imageUrl: "https://example.com/images/laura.jpg",
                name: "Laura Stone",
                team: { name: "Analytics" },
                description: "Laura analyzes business data to generate insights that inform decisions. She’s a data wiz with strong visualization skills.",
                skills: ["Data Analysis", "SQL", "Tableau", "Python"],
                social: ["https://linkedin.com/in/laurastone"]
            }
        ]

        await new Promise(resolve => setTimeout(resolve, 3000))
            .then(() => {
                userCardStore.loading = false
            })

        userCardStore.user = [...userCardStore.user, ...moreUsers];
    }

    const setDetailUser = (user: UserDto) => {
        userCardStore.userDetail = user
    }

    return {
        getAllUsers,
        setDetailUser,
        loadMoreData,
        initalLoadUsers,
        addFilter,
        loadScrollUsers
    }
}