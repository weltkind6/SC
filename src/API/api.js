import * as axios from "axios";

// i can get currentPage form params on this function
export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {withCredentials: true})
        .then(response => {
            return response.data
        })
}

