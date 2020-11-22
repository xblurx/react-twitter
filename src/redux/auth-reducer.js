import { getAPI } from '../api/api';

const SET_AUTH_DATA = 'checkAuth';

let initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const checkAuth = (data) => ({ type: SET_AUTH_DATA, data });

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        default:
            return state;
    }
};

export const getAuth = () => (dispatch) => {
    getAPI.authMe().then((data) => {
        if (data.resultCode === 0) {
            dispatch(checkAuth(data.data));
        }
    });
};
