import { getAPI, putAPI } from '../api/api';

const SET_AUTH_DATA = 'checkAuth';

let initState = {
    id: null,
    email: null,
    login: null,
    isAuth: null,
};

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
};

const setAuth = (id, email, login, isAuth) => ({
    type: SET_AUTH_DATA,
    data: {
        id,
        email,
        login,
        isAuth,
    },
});

export const getAuth = () => (dispatch) => {
    return getAPI.authMe().then((data) => {
        if (!data.resultCode) {
            console.log('authReducer getAuth write auth');
            let { id, email, login } = data.data;
            dispatch(setAuth(id, email, login, true));
            console.log(`state after auth-reducer/getAuth: ${window.store.getState().auth.isAuth}`);
        }
    });
};

export const logIn = (loginData) => (dispatch) => {
    console.log(`login data from form in logIn thunk: ${loginData}`);
    putAPI.login(loginData).then((response) => {
        console.log(response);
        if (!response.resultCode) {
            dispatch(getAuth());
        }
    });
};

export const logOut = () => (dispatch) => {
    putAPI.logout().then((response) => {
        if (!response.resultCode) {
            dispatch(setAuth(null, null, null, false));
        }
    });
};
