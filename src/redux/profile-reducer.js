import { getAPI } from '../api/api';

const ADD_POST = 'addPost';
const SET_USER_PROFILE = 'setUserProfile';
const SET_STATUS = 'setUserStatus';

let initState = {
    posts: [
        {
            id: 1,
            message: 'hey, its okay to fail, be strong!',
            img:
                'https://lh3.googleusercontent.com/jyF9cEq-ugHkMkrEBLg2xnmILr7aZikXhf5OnTZbEJN-ogzgLUOvqMXQWOjO9FJDOQ',
            likes: '188',
        },
        {
            id: 2,
            message: 'i love you no matter what!',
            img: 'https://image.emojipng.com/962/35962.jpg',
            likes: '214',
        },
    ],
    profile: {
        name: 'Avril Lavigne',
        avatar:
            'https://avatars.yandex.net/get-music-content/3226792/508b3a1b.p.58069/s400x400',
    },
    status: '',
};

export const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: action.message,
                img: state.posts[state.posts.length - 1].img,
                likes: String(Math.floor(Math.random() * Math.floor(500))),
            };
            return {
                ...state,
                posts: [...state.posts, post],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
};

const setUserProfile = (data) => ({ type: SET_USER_PROFILE, profile: data });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const addPost = (message) => ({ type: ADD_POST, message});

export const getProfile = (userId) => (dispatch) => {
    getAPI.getProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
    });
};

export const getStatus = (userId) => (dispatch) => {
    getAPI.getStatus(userId).then((data) => {
        dispatch(setStatus(data));
    });
};

export const updateStatus = (status) => (dispatch) => {
    getAPI.updateStatus(status).then((resultCode) => {
        if (!resultCode) dispatch(setStatus(status));
    });
};
