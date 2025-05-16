import {useUserCardStore} from "~/store/user-card.store";
import type { UserDto } from '~/types/User.dto'


export function userCardService(){
    const userCardStore = useUserCardStore()

    const getAllUsers = () => {
        userCardStore.user = [
            {
                id: "1",
                imageUrl: "https://example.com/images/alice.jpg",
                name: "Alice Johnson",
                team: { name: "Development" },
                description: "Alice is a seasoned frontend developer with a passion for creating intuitive user interfaces. She has over 5 years of experience in building responsive web applications.",
                skills: ["JavaScript", "Vue.js", "CSS", "HTML"],
                social: ["https://twitter.com/alicejohnson", "https://github.com/alicejohnson"]
            },
            {
                id: "2",
                imageUrl: "https://example.com/images/bob.jpg",
                name: "Bob Smith",
                team: { name: "Marketing" },
                description: "Bob is a creative marketing specialist who excels in digital campaigns and brand strategy. He has a knack for connecting with audiences and driving engagement.",
                skills: ["SEO", "Content Marketing", "Social Media"],
                social: ["https://linkedin.com/in/bobsmith", "https://twitter.com/bobsmith"]
            },
            {
                id: "3",
                imageUrl: "https://example.com/images/carol.jpg",
                name: "Carol Williams",
                team: { name: "Design" },
                description: "Carol is a talented UI/UX designer with a keen eye for detail. She specializes in creating user-centered designs that enhance user experience and satisfaction.",
                skills: ["Figma", "Sketch", "Adobe XD"],
                social: ["https://dribbble.com/carolwilliams", "https://behance.net/carolwilliams"]
            },
            {
                id: "4",
                imageUrl: "https://example.com/images/david.jpg",
                name: "David Lee",
                team: { name: "Engineering" },
                description: "David is a backend engineer with expertise in building scalable server-side applications. He is proficient in various programming languages and database systems.",
                skills: ["Node.js", "Python", "SQL", "MongoDB"],
                social: ["https://github.com/davidlee", "https://linkedin.com/in/davidlee"]
            },
            {
                id: "5",
                imageUrl: "https://example.com/images/eva.jpg",
                name: "Eva Martinez",
                team: { name: "Product" },
                description: "Eva is a product manager who bridges the gap between technical teams and customer needs. She has a strong background in agile methodologies and product lifecycle management.",
                skills: ["Agile", "Scrum", "Product Roadmapping", "Beer", "Threeshakeing", "Drinking"],
                social: ["https://twitter.com/evamartinez", "https://linkedin.com/in/evamartinez"]
            }
        ]
    }

    const setDetailUser = (user: UserDto) => {
        userCardStore.userDetail = user
    }

    return {
        getAllUsers,
        setDetailUser
    }
}