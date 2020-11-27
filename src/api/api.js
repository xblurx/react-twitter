import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
});

export const getAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },
    authMe() {
        return instance.get('auth/me').then((response) => response.data);
    },
    getProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then((response) => response.data);
    },
    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then((response) => response.data);
    },
    updateStatus(status) {
        return instance
            .put(`profile/status`, {status: status})
            .then((response) => response.resultCode);
    },
};
