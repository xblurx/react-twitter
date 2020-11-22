import { getAPI } from '../api/api';

const ADD_POST = 'addPost';
const CHANGE_POST_TEXT = 'changeNewPostText';
const SET_USER_PROFILE = 'setUserProfile';

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
    newPostText: '',
    profile: {
        name: 'Avril Lavigne',
        avatar:
            'https://avatars.yandex.net/get-music-content/3226792/508b3a1b.p.58069/s400x400',
    },
};

export const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: state.newPostText,
                img: state.posts[state.posts.length - 1].img,
                likes: String(Math.floor(Math.random() * Math.floor(500))),
            };
            return {
                ...state,
                posts: [...state.posts, post],
                newPostText: '',
            };
        case CHANGE_POST_TEXT:
            return {
                ...state,
                newPostText: action.text,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        default:
            return state;
    }
};

const setUserProfile = (data) => ({ type: SET_USER_PROFILE, profile: data });
export const changePostText = (text) => ({ type: CHANGE_POST_TEXT, text });
export const addPost = () => ({ type: ADD_POST });

export const getProfile = (userId) => (dispatch) => {
    getAPI.getProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
    });
};
