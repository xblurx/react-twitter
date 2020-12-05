import { getAPI, putAPI } from '../api/api';

const ADD_POST = 'addPost';
const SET_USER_PROFILE = 'setUserProfile';
const SET_AVATAR = 'setAvatar';
const SET_STATUS = 'setUserStatus';
const DELETE_POST = 'deletePost';

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
    profile: null,
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.id),
            };
        case SET_AVATAR:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            };
        default:
            return state;
    }
};

const setUserProfile = (data) => ({ type: SET_USER_PROFILE, profile: data });
const setAvatar = (photos) => ({ type: SET_AVATAR, photos });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const addPost = (message) => ({ type: ADD_POST, message });
export const deletePost = (id) => ({ type: DELETE_POST, id });

export const getProfile = (userId) => async (dispatch) => {
    let response = await getAPI.getProfile(userId);
    dispatch(setUserProfile(response));
};

export const getStatus = (userId) => async (dispatch) => {
    const data = await getAPI.getStatus(userId);
    dispatch(setStatus(data));
};

export const updateStatus = (status) => (dispatch) => {
    getAPI.updateStatus(status).then((resultCode) => {
        if (!resultCode) dispatch(setStatus(status));
    });
};

export const saveAvatar = (file) => async (dispatch) => {
    const data = await putAPI.updateAvatar(file);
    if (!data.resultCode) dispatch(setAvatar(data.photos));
};
