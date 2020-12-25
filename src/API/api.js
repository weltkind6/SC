import * as axios from "axios";

// в инстансе забит базовый url и другие настройки.

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": 'b4110b74-b2e7-4e00-8d77-c68abf0971bc'
    }
})
// i can get currentPage form params on this function


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    }
}

