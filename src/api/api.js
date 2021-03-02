import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "cb31ddc1-309a-457d-8004-8b6b8183c6de"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage} &count=${pageSize}`)
            .then(response => response.data)
    }
}



