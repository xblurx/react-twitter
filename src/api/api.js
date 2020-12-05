import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e10bc01d-c5b3-4b52-acbf-fababe719ef1',
    },
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
        console.warn('deprecated method updateStatus');
        return putAPI.updateStatus(status);
    },
};

export const putAPI = {
    updateStatus(status) {
        return instance
            .put('profile/status', { status })
            .then((response) => response.resultCode);
    },
    updateAvatar(file) {
        const formData = new FormData(file);
        return instance
            .put('profile/photo', formData)
            .then((response) => response.data);
    },
    login(data = null) {
        let { email, password, rememberMe } = data;
        return instance
            .post('auth/login', { email, password, rememberMe })
            .then((response) => response.data);
    },
    logout() {
        return instance.delete('auth/login');
    },
};
